const Event = require("../../models/Event");

module.exports = async function (req, res) {
  console.log("Retrieving all events");

  const events = await Event.find();

  res.status(200).send(events);
};
