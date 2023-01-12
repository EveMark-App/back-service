const Event = require("../../models/Event");


module.exports = async function (req, res) {
  console.log("Creating an event with body ", req.body);
  const body = req.body;


  try {
    const newEvent = await Event.create({
      name: body.event_name ,
      description: body.event_description,
      creator:req.user._id,
      bannerURL:"String",
      location: body.event_location,
      start_date: body.event_start_date,
      end_date:body.event_end_date,
      category: body.event_category,
      program:body.program,
      price: body.event_price,
      attendees:[],
      checked_in_attendees:[],
    });
    console.log("Event created  ", newEvent);

    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating new event please try again." + err);
  }
};
