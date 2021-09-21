const mongoose = require("mongoose");
const { UserModel, UserProfileModel } = require("./model");
const md5 = require("md5");
const connectDb = () => new Promise((resolve, reject) => 
{ try { resolve(mongoose.connect("mongodb+srv://ayush:tyagi.apj@cluster0.oix8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true })) 
}
 catch (err) { reject(err) }});
const userData = [ 
  { firstName: "ayush", lastName: "tyagi", email: "ayush@123", password: md5(1234521), gender: "male", },
 { firstName: "ankur", lastName: "tyagi", email: "ankur@123", password: md5(1234578), gender: "male", }, 
 { firstName: "atul", lastName: "tyagi", email: "atul@123", password: md5(1234590), gender: "male", }, 
 { firstName: "abhi", lastName: "tyagi", email: "abhi@123", password: md5(12345), gender: "male", }, 
 { firstName: "akshay", lastName: "tyagi", email: "akshay@123", password: md5(1234545), gender: "male", },
];
const createUserProfile = (users) => new Promise(async (resolve) => 
{ let userProfileData = [ 
  { dob: new Date("2018-06-29"), mobile_no: 1 },
  { dob: new Date("2009-06-20"), mobile_no: 2, },
   { dob: new Date("1970-06-22"), mobile_no: 3 }, 
   { dob: new Date("1995-06-27"), mobile_no: 4 },
    { dob: new Date("2001-06-24"), mobile_no: 5 }
  ];
 users.forEach((user, userKey) =>{
     console.log(`User ${userKey + 1}`, user._id)
   userProfileData.map((profile, profileKey) => { 
     if (userKey == profileKey) 
     profile["user_id"] = user._id; 
     return (profile); 
    });
   }); 
   const usersProfile = await UserProfileModel.create(userProfileData); 
   console.log(usersProfile); 
   resolve();
  })

async function start(userData){
 try { 
   await connectDb(); 
   const users = await UserModel.create(userData); 
   await createUserProfile(users); 
 } catch (err) {
    console.log(err)
   }
}
start(userData);

