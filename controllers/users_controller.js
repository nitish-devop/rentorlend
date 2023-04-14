const User = require('../models/User');

module.exports.profile = async function(req,res){
    const user = User.findById(req.params.id);
    res.render('user_profile',{
        title : 'Profile | RendOrLend',
        user_profile : user
    })
}

module.exports.signup = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/me');
    }
    res.render('signup',{
        title : 'SignUp | RendOrLend'
    })
}

module.exports.signin = function(req,res){
    if(req.isAuthenticated()){
        return res.redirect('/users/me');
    }
    res.render('signin',{
        title : 'SignIn | RendOrLend'
    })
}


// handle user signup
module.exports.create = async function(req,res){
    console.log(req.body);

    // check if password and confirm password is same or not
    if(req.body.password != req.body.confirm_password){
        console.log('Password did not matched');
        return res.redirect('back');
    }

    // check if user is already registred or not
    const user = await User.findOne({email:req.body.email});

    if(user){
        console.log('Email id is already registred.')
        return res.redirect('back');
    }else{
        let user = await User.create(req.body);
        console.log('You are registred to us.');
        return res.redirect('/users/signin');
    }
}

module.exports.createSession = function(req,res){
    return res.redirect('/');
}

module.exports.destroySession = function(req,res){
    req.logout(()=>{
        console.log('Your are redirecting to home.');
    }); 
    return res.redirect('/');
}