const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = async function (req, res) {
  console.log("buying ticket for event ", req.body.eventId);
  try {
    await Event.findByIdAndUpdate(req.body.eventId, {
      $push: { attendees: req.user.id },
    });

    await User.findByIdAndUpdate(req.user.id, {
      $push: { my_events: req.body.eventId },
    });

    res.status(200).json({ msg: "Payment Sucessfull" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Payment failed" + e });
  }
};
