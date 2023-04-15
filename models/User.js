const mongoose = require('mongoose');

// Schema for User
const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true,"Please Enter Your Name."]
    },
    email : {
        type : String,
        required : [true,"Please Enter Your Email."]
    },
    password : {
        type : String,
        required : [true,"Please Enter Your Passoword."],
    },
    phone : {
        type : Number,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
module.exports = User;