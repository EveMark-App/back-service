const Event = require("../../models/Event");

module.exports = async function (req, res) {
  console.log("Updating an event  with id ", req.params);
  
  //check if the user is the creator of the event
  
  const event = await Event.findOneAndUpdate({_id:req.params.eventId},req.body,{returnDocument:"after"});

  res.status(200).send(event);
};
