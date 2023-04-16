const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const AVATAR_PATH = path.join('/uploads/users/avatars');
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
    },
    avatar : {
        type :String,
    }
},{timestamps:true}); 

let storage = multer.diskStorage({
    destination : function(req,file,cb){
        cb(null,path.join(__dirname,'..',AVATAR_PATH));
    },
    filename : function(req,file,cb){
        cb(null,file.fieldname+"-"+Date.now());
    }
}); 



const User = mongoose.model('User',userSchema);
module.exports = User;