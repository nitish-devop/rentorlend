const User = require('../models/User');

// handler --> /users/profile  page rendering
module.exports.profile = async function (req, res) {
  const user = await User.findById(req.params.id);
  console.log(user);
  res.render("user_profile", {
    title: "Profile | RendOrLend",
    user_profile: user,
  });
};

// handler --> /users/signup page rendering
module.exports.signup = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/me");
  }
  res.render("signup", {
    title: "SignUp | RendOrLend",
  });
};

//  /users/signin page rendering
module.exports.signin = function (req, res) {
  if (req.isAuthenticated()) {
    return res.redirect("/users/me");
  }
  res.render("signin", {
    title: "SignIn | RendOrLend",
  });
};

// /users/create --> Create New User
module.exports.create = async function (req, res) {
  console.log(req.body);

  // check if password and confirm password is same or not
  if (req.body.password != req.body.confirm_password) {
    console.log("Password did not matched");
    return res.redirect("back");
  }

  // check if user is already registred or not
  const user = await User.findOne({ email: req.body.email });

  if (user) {
    console.log("Email id is already registred.");
    return res.redirect("back");
  } else {
    let user = await User.create(req.body);
    console.log("You are registred to us.");
    return res.redirect("/users/signin");
  }
};

// /users/create --> Authenticate and establish connection
module.exports.createSession = function (req, res) {
  req.flash('success','Logged in successfully.');
  return res.redirect("/");
};

// /users/signout --> Destroy session and do logout user
module.exports.destroySession = function (req, res) {
  req.logout(() => {
    console.log("Your are redirecting to home.");
  });
  req.flash('success','Logged out successfully.');
  return res.redirect("/");
};

// update profile
module.exports.update = async function(req,res){
  
  if(req.user.id == req.params.id){
      try{
        let user = await User.findById(req.params.id);
        User.uploadedAvatar (req,res,function(err){
          if(err) { console.log('Multer error.',err)}
           
          user.name = req.body.name;
          user.email = req.body.email;
          if(req.file){
            user.avatar = user.avatarPath+'/'+req.file.filename;
          }
          user.save();
          console.log(user);
          return res.redirect('back');
        })  

      }catch(err){
        console.log(err);
      }


    }

    
  //   return res.redirect('back');
  // }else{
  //   return res.status(401).send('Unauthorized.');
  // }
}
