const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Shgjoin = require('../models/Shgjoin');
const User = require('../models/User');
const Shgroups = require('../models/Shgroups');

// @route   POST api/shgroups
//@desc     Request to join a Shgroup
//@access   Private
router.post('/:id', auth, async (req, res) => {
  try {
    const joinReq = new Shgjoin({
      user_id: req.user.id,
      shg_id: req.params.id,
      status: 'pending',
    });

    await joinReq.save();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/shgroups
//@desc     Accept/Dismiss Requests
//@access   Private
router.put('/:id', auth, async (req, res) => {
  const { status } = req.body;
  try {
    const request = Shgjoin.findById(req.params.id);
    request.status = status;
    await request.save();

    if (status === 'accepted') {
      const user = User.findById(request.user_id);
      user.shgList.push(request._id);
      user.group = 'associated';

      const shg = Shgroups.findById(request.shg_id);
      shg.memberList.push(request._id);

      await user.save();
      await shg.save();
    }

    res
      .status(200)
      .json({ status: 'success', message: 'Status changed successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
