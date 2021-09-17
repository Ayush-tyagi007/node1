const mongoose=require('mongoose');
const {User,UserProfile}=require("./model");
const md5 = require('md5');
mongoose.connect('mongodb+srv://ayush:tyagi.apj@cluster0.oix8x.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		
	}).then(val=>{console.log('database is connected' )})
    .catch(err=>{console.log(err)
    })

    
    const userData = 
        {
        
        firstName: "ayush",
        lastName: "tyagi",
        email: "ayush@123",
        password:md5(12345)
        }
    
    
User.create(userData)
.then(user=>{
  const userProfileData={
      mobile_no:1234567812,
      dob:new Date('2018-06-29'),
      
      user_id:user.user_id


    }
    UserProfile.create(userProfileData)
    .then(value=>{console.log(value)})
    .catch(er=>{console.log(er)})

    
}).catch(error=>{
    console.log(error)
})


