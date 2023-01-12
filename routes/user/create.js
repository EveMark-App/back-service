const User = require("../../models/User")

module.exports =  async  function(req, res) {
    const { email, password, first_name, last_name } = req.body;
    const userExists =  await User.findOne({email:email})
    
    if(userExists)
      return res.status(500).json({msg:"user already exists"})
      
      try{
        const user = new User.create({ email, password, first_name, last_name, created_events:[], my_events:[],test:"teeest" });
        res.status(200).json(user);
      }
      catch(e)
      {
        console.log("error while creating a user" + e)
        res.status(500).json({error:"error while creating a user" + e})
      }
  



  };