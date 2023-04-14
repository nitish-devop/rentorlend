const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment : {
        type : String,
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product'
    },

},{timestamps:true});  

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;