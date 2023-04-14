const mongoose = require('mongoose');

// Schema for Proudct Model
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    price : {
        type : Number,
        required : true
    },
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'User'
    },
    // include array of all review refrence
    reviews : [
        {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Review'
        }
    ],
},{timestamps:true});


const Product = mongoose.model('Product',productSchema);
module.exports = Product;