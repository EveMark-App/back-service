const User = require("../../models/User");

module.exports = async function (req, res) {
  console.log("retrieving created events for user ");

try{
    const user =  await User.findOne({email:req.user.email}).populate("created_events")
    res.status(200).json(user.created_events);

}catch(e){
 
    console.log("error while finding user");
    res.status(500).send("Error retrieving events" + e);
  }
};
