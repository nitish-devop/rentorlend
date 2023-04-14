const Product = require('../models/Product');
const Request = require('../models/Request');

module.exports.rent = async function(req,res){
    const product = await Product.findById({_id:req.params.id})
    .populate('user')
    .populate({
        path : 'reviews',
        populate : {
            path : 'user'
        }
    })

    res.render('rent',{
        title : 'Rent | RentOrLend',
        product
    });
}

module.exports.lend = function(req,res){
    res.render('lend',{
        title : 'Lend | RentOrLend'
    });
};

module.exports.request = async function(req,res){
    
    const requests = await Request.find().populate('user');
    console.log(requests); 
    res.render('request',{
        title : 'Request | RentOrLend',
        requests
    });
}