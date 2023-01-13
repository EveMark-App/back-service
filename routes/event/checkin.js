const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = async function (req, res) {
  console.log("buying ticket for event ", req.body.eventId);

  //check that the request comes from the creator
  //check that the participant is not yet checked in
  //check that the participant is in the attendees list of the event
  //check in successfull
  try {
    const creator = await User.findById(req.user.id);
    const event = await Event.findById(req.body.eventId);

    console.log(creator)
    console.log(event)

    const participantId = req.body.participantId;
    if (creator._id != event.creator)
      res.status(400).json(creator);
    if (!event.attendees.includes(participantId))
      res
        .status(400)
        .json({ error: "the participant is not in the attendees list" });
    if (event.checked_in_attendees.includes(participantId))
      res
        .status(400)
        .json({ error: "the participant is already checked in" });

    await Event.updateOne({_id:event._id}, {
      $push: { checked_in_attendees: participantId },
    });
    
    const user = await User.findOne({ _id: participantId });
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Check-in failed" + e });
  }
};
