const mongoose = require('mongoose');

// Schema for User request for new product
const requestSchema= new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    days : {
        type : Number,
        required : true,
    },
    price : {
        type : Number,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    }
},{timestamps:true});

const Request = mongoose.model('Request',requestSchema);
module.exports = Request;