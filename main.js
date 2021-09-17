const mongoose = require("mongoose");
const { User, UserProfile } = require("./model");
const md5 = require("md5");
mongoose
  .connect(
    "mongodb+srv://ayush:tyagi.apj@cluster0.oix8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )

  .then((val) => {
    console.log("database is connected");
  })
  .catch((err) => {
    console.log(err);
  });
const userData = [
  {
    firstName: "ayush",
    lastName: "tyagi",
    email: "ayush@123",
    password: md5(12345),
  },

  {
    firstName: "ayush",
    lastName: "tyagi",
    email: "ayush@123",
    password: md5(12345),
  },
  {
    firstName: "ayush",
    lastName: "tyagi",
    email: "ayush@123",
    password: md5(12345),
  },
  {
    firstName: "ayush",
    lastName: "tyagi",
    email: "ayush@123",
    password: md5(12345),
  },
];

const userProfileData = [
  {
    dob: new Date("2018-06-29"),
    mobile_no: 12324335,
  },
  {
    dob: new Date("2018-06-29"),
    mobile_no: 234345245,
  },
  {
    dob: new Date("2018-06-29"),
    mobile_no: 23454,
  },
  {
    dob: new Date("2018-06-29"),
    mobile_no: 2134324,
  },
  {
    dob: new Date("2018-06-29"),
    mobile_no: 23434877,
  },
];

const getdocument = async (userData, userProfileData) => {
  a = User.insertMany(userData);
  b = UserProfile.insertMany(userProfileData);
  //   const result = await User.find();
  //   console.log(result[1]._id);
};
getdocument(userData, userProfileData);
