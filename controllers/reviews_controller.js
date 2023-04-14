const Review = require("../models/Review");
const Product = require('../models/Product');

module.exports.createReview = async function(req,res){
    console.log(req.body);
    const product = await Product.findById(req.body.product_id)

    if(product){
        const review = await Review.create({
            comment : req.body.comment,
            user:req.user.id,
            product : req.body.product_id
        })
        product.reviews.push(review);
        product.save();
        res.status(200).json({
            review
        })
    }
};

// Deleting a review 
module.exports.destroyReview = async function(req,res){
    // find review
    const review = await Review.findById(req.params.id);
    if(review.user == req.user.id){
        // store product_id
        let productId = review.product;
        // delete review 
        review.remove();
        // find Product and update this deleted review
        await Product.findByIdAndUpdate(productId ={$pull : {reviews : req.params.id}});
        res.redirect('back');

    }
}