module.exports.signup = function(req,res){
    res.render('signup',{
        title : 'SignUp | RendOrLend'
    })
}

module.exports.signin = function(req,res){
    res.render('signin',{
        title : 'SignIn | RendOrLend'
    })
}