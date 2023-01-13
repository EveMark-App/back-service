const Event = require("../../models/Event");

module.exports = async function (req, res) {
  console.log("buying ticket for event ", req.params.eventId);

  try {
    await Event.findByIdAndUpdate(req.params.eventId, {
      $push: { checked_in_attendees: req.body.userId },
    });
    res.status(200).json({ msg: "Check-in Sucessfull" });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Check-in failed" + e });
  }
};
