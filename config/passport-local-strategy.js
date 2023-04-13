const passport = require('passport');
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy({
        usernameField : 'email',
    },
    async function(email,password,done){
        // find user and establish identity
        const user = await User.findOne({email:email});
        if(!user || user.password != password){
            console.log('Invalid username and password.');
            return done(null,false);
        }
        return done(null,user);
    }
));

// serialize the user to decide which key is to be kept in the cookies
passport.serializeUser(function(user,done){
    done(null,user.id)
});

// deserialize the user
passport.deserializeUser(async function(id,done){
    const user = await User.findById(id);
    done(null,user);
})

// check if user is authenticated or not
passport.checkAuthentication = function(req,res,next){
    if(req.isAuthenticated()){
        return next();
    }
    
    //else user is not signed in
    return res.redirect('/users/signin');
}

passport.setAuthenticatedUser = function(req,res,next){
    if(req.isAuthenticated()){
        //current signed in user to locals
        res.locals.user = req.user;
    }
    next(); 
    
}

module.exports = passport;   