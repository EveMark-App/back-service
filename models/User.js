const mongoose = require("mongoose");
const bcrypt = require("bcrypt")

const saltRounds = 10;
const User = new mongoose.Schema({
  first_name:{type:String,required:true},
  last_name:{type:String,required:true},
  email: { type: String, required: true, unique: true },
  my_events:[{type:mongoose.Schema.Types.ObjectId, ref:"Event"}],
  created_events:[{type:mongoose.Schema.Types.ObjectId, ref:"Event"}],
  password: { type: String, required: true },
  created_at:{ type: Date, default: Date.now }

});

User.pre("save", function (next) {
  // Check if document is new or a new password has been set
  if (this.isNew || this.isModified("password")) {
    // Saving reference to this because of changing scopes
    const document = this;
    bcrypt.hash(document.password, saltRounds, function (err, hashedPassword) {
      if (err) {
        next(err);
      } else {
        document.password = hashedPassword;
        next();
      }
    });
  } else {
    next();
  }
});

User.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    if (err) {
      callback(err);
    } else {
      callback(err, same);
    }
  });
};
module.exports = mongoose.model("User", User);
