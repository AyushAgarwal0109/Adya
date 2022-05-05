const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const Shgjoin = require('../models/Shgjoin');
const User = require('../models/User');
const Shgroups = require('../models/Shgroups');

// @route   GET api/requests
//@desc     Get requests made to Shgroups for members
//@access   Private
router.get('/:id', auth, async (req, res) => {
  try {
    const requests = await Shgjoin.find({ shg_id: req.params.id });
    res.status(200).send(requests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/requests
//@desc     Request to join a Shgroup
//@access   Private
router.post('/:id', auth, async (req, res) => {
  try {
    const searchReq = await Shgjoin.find({
      $and: [{ user_id: req.user.id }, { shg_id: req.params.id }],
    });
    if (searchReq.length !== 0) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'Request already sent!' });
    }

    const joinReq = new Shgjoin({
      user_id: req.user.id,
      shg_id: req.params.id,
      status: 'pending',
    });

    await joinReq.save();
    res.status(200).json({ status: 'success', message: 'Request sent!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   PUT api/requests
//@desc     Accept/Dismiss Requests
//@access   Private
router.put('/:id', auth, async (req, res) => {
  const { status } = req.body;
  try {
    const request = await Shgjoin.findById(req.params.id);
    request.status = status;
    await request.save();

    if (status === 'accepted') {
      const user = await User.findById(request.user_id);
      user.shgList.push(request._id);
      user.group = 'associated';

      const shg = await Shgroups.findById(request.shg_id);
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
