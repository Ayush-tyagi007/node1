const mongoose = require("mongoose");
const { UserModel, UserProfileModel } = require("./model");
const md5 = require("md5");
const connectDb = () =>
  new Promise((resolve, reject) => {
    try {
      resolve(
        mongoose.connect(
          "mongodb+srv://ayush:tyagi.apj@cluster0.oix8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
          { useNewUrlParser: true, useUnifiedTopology: true }
        )
      );
    } catch (err) {
      reject(err);
    }
  });
const userData = [
  {
    firstName: "ayush",
    lastName: "tyagi",
    email: "ayush@123",
    password: md5(1234521),
  },
  {
    firstName: "ankur",
    lastName: "tyagi",
    email: "ankur@123",
    password: md5(1234578),
  },
  {
    firstName: "atul",
    lastName: "tyagi",
    email: "atul@123",
    password: md5(1234590),
  },
  {
    firstName: "abhi",
    lastName: "tyagi",
    email: "abhi@123",
    password: md5(12345),
  },
  {
    firstName: "akshay",
    lastName: "tyagi",
    email: "akshay@123",
    password: md5(1234545),
  },
];
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
const createUserProfile = (users) =>
  new Promise(async (resolve) => {
    let userProfileData = [
      { dob: new Date("1958-06-29"), mobile_no: 1 },
      { dob: new Date("2009-06-20"), mobile_no: 2 },
      { dob: new Date("1970-06-22"), mobile_no: 3 },
      { dob: new Date("1995-06-27"), mobile_no: 4 },
      { dob: new Date("2001-06-24"), mobile_no: 5 },
    ];
    
    users.forEach((user, userKey) => {
      console.log(`User ${userKey + 1}`, user._id);
      userProfileData.map((profile, profileKey) => {
        if (userKey == profileKey) {
          profile["user_id"] = user._id;
         
        }
        return profile;
      });
      
    });
    let avgAge;
    
    const profileuser= await UserProfileModel.find({})
  profileuser.forEach((profil,key)=>{
   avgAge=avgAge+getAge(profileuser[key].dob)
  },
  console.log(avgAge)
  )
    let usersProfile = await UserProfileModel.create(userProfileData);
    resolve(userProfileData);
  });
const deleteUserProfile = () =>
  new Promise(async (resolve, reject) => {
    const years25date = new Date(
      new Date().setFullYear(new Date().getFullYear() - 25)
    ).toISOString();
    let profiles25greater = await UserProfileModel.find(
      { dob: { $lte: years25date } },
      { user_id: 1 }
    );
    console.log(profiles25greater);
    let userIds = profiles25greater.map((profile) => profile._id);
    console.log( userIds);
    await UserModel.deleteMany({ user_id: { $in: userIds } });
    await UserProfileModel.deleteMany({ _id: { $in: userIds } });
    resolve();
  });
async function start(userData) {
  try {
    await connectDb();
    const users = await UserModel.create(userData);
    let data = await createUserProfile(users);
    await deleteUserProfile();
    console.log("completed successfully");
    process.exit();
  } catch (err) {
    console.log(err);
  }
}
start(userData);
