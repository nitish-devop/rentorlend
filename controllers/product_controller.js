const Product = require('../models/Product');
const Review = require('../models/Review');



module.exports.createProduct = async function(req,res){
    try{
        console.log(req.body);
        const product = await Product.create({
            name : req.body.name,
            price : req.body.price,
            user : req.user._id
        }
        );
        
        res.status(200).json({
            Product : product
        })
    }catch(err){
        console.log(err);
    } 
}


// handler for deleting product with their reviews
module.exports.destroyProduct = async function(req,res){
    // search for product exist or not
    const product = await Product.findById(req.params.id);

    // if login user and product owner is same
    if(product.user == req.user.id){
        console.log('Trying to delete')
        await Review.deleteMany({product : req.params.id});
        return res.redirect('back');
    }else{
        console.log('You are not allowed to delete');
        return res.redirect('back');
    }

}