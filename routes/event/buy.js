const Event = require("../../models/Event");
const User = require("../../models/User");

module.exports = async function (req, res) {
  console.log("buying ticket for event ", req.params.eventId);
try{



  await Event.findByIdAndUpdate(req.params.eventId, {
    $push: { attendees: req.body.userId },
  });

  await User.findByIdAndUpdate(req.body.userId, {
    $push: { my_events: req.params.eventId },
  });

  res.status(200).json({msg:"Payment Sucessfull"});
}catch(e){
    console.log(e)
    res.status(500).json({msg:"Payment failed" + e} )
}
};
