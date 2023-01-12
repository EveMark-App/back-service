const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = async function (req, res) {
 // console.log("Creating an event with body ", req.body);
  const body = req.body;

  try {
    const newEvent = await Event.create({
      name: body.name,
      description: body.description,
      short_description: body.short_description,
      creator: body.creator,
      bannerURL: body.bannerURL,
      location: body.ocation,
      start_date: body.start_date,
      end_date: body.end_date,
      category: body.category,
      program: body.program,
      price: body.price,
      attendees: [],
      checked_in_attendees: [],
    });

    await User.findByIdAndUpdate(body.creator, {
      $push: { created_events: newEvent._id },
    });

    console.log("Event created  ", newEvent);

    res.status(200).json(newEvent);
  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating new event please try again." + err);
  }
};
