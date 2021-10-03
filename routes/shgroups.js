const express = require('express');
const router = express.Router();
const Shgroup = require('../models/Shgroups');

router.post('/', async (req, res) => {
  const { name, representative, members, phone, business, assistance } =
    req.body;

  try {
    let shgroup = await Shgroup.findOne({ name });

    if (shgroup) {
      return res.status(400).json({ msg: 'Already applied for shgroup.' });
    }

    shgroup = new Shgroup({
      name,
      representative,
      members,
      phone,
      business,
      assistance,
    });

    await shgroup.save();
    res.json({ msg: 'Form submitted successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
