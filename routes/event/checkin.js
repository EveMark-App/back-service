const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = async function (req, res) {
  console.log("buying ticket for event ", req.body.eventId);

  try {
    await Event.findByIdAndUpdate(req.body.eventId, {
      $push: { checked_in_attendees: req.user.id },
    });
    const user = await User.findOne({_id:req.user.id});
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Check-in failed" + e });
  }
};
