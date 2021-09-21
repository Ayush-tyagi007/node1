const mongoose = require("mongoose");
var md5 = require("md5");

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  gender:String
});

const userProfileSchema = new mongoose.Schema({
  user_id: mongoose.Schema.Types.ObjectId,
  dob: Date,
  email: String,
  mobile_no: Number,
});

const UserModel = mongoose.model("UserModel", userSchema);
const UserProfileModel = mongoose.model("UserProfileModel", userProfileSchema);
module.exports = { UserModel, UserProfileModel };
