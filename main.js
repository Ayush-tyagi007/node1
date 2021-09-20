const mongoose = require("mongoose");
const { User, UserProfile } = require("./model");
const md5 = require("md5");
db = mongoose
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
    password: md5(1234521),
    gender: "male",
  },

  {
    firstName: "ankur",
    lastName: "tyagi",
    email: "ankur@123",
    password: md5(1234578),
    gender: "male",
  },
  {
    firstName: "atul",
    lastName: "tyagi",
    email: "atul@123",
    password: md5(1234590),
    gender: "male",
  },
  {
    firstName: "abhi",
    lastName: "tyagi",
    email: "abhi@123",
    password: md5(12345),
    gender: "male",
  },
  {
    firstName: "akshay",
    lastName: "tyagi",
    email: "akshay@123",
    password: md5(1234545),
    gender: "male",
  },
];

async function myfunction(userData) {
  const a = await User.create(userData);
  console.log(a[0]._id);

  const userProfileData = [
    {
      dob: new Date("2018-06-29"),
      mobile_no: 12324335,
      user_id: a[0]._id,
    },
    {
      dob: new Date("2009-06-20"),
      mobile_no: 234345245,
      user_id: a[1]._id,
    },
    {
      dob: new Date("1970-06-22"),
      mobile_no: 23454,
      user_id: a[2]._id,
    },
    {
      dob: new Date("1995-06-27"),
      mobile_no: 2134324,
      user_id: a[3]._id,
    },
    {
      dob: new Date("2001-06-24"),
      mobile_no: 23434877,
      user_id: a[4]._id,
    },
  ];
  const userProfile = UserProfile.create(userProfileData);

}
myfunction(userData);