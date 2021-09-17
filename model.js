const mongoose = require("mongoose");
var md5 = require("md5");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

const userProfileSchema = new mongoose.Schema({
//   user_id: mongoose.Schema.Types.ObjectId,
  dob: Date,
  mobile_no: Number,
});
const User = mongoose.model("User", userSchema);
const UserProfile = mongoose.model("UserProfile", userProfileSchema);
module.exports = { User, UserProfile };
