const Event = require("../../models/Event");

module.exports = async function (req, res) {
  console.log("deleting an event with id ", req.params.eventId);
  
  const event = await Event.deleteOne({_id:req.params.eventId});

  res.status(200).send(event);
};
