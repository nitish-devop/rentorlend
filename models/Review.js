const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    comment : {
        type : String,
        required : true,
    },
    // Refer to user who create this review
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required : true,
    },
    // Refer to product whose review is this
    product : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Product',
        required : true,
    },

},{timestamps:true});  

const Review = mongoose.model('Review',reviewSchema);
module.exports = Review;