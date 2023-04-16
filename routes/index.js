const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

const paginationhandler = 
async function(req,res){
    let perPage = 5;
    let page = req.params.page || 1;
    const products = await Product.find()
                                .skip((perPage*page)-perPage)
                                .limit(perPage)
                                .populate('user');
    const productCount = await Product.count();
    console.log(products)
    res.render('home',{
        title : 'Home | RentOrLend',
        products,
        count : productCount,
        pages : Math.ceil(productCount/perPage),
        curr : page
    })
};
// landing page 
router.get('/',paginationhandler);
router.get('/:page',paginationhandler);

// load service routes
router.use('/services',require('./service_routes'));


//load users route
router.use('/users', require('./user_routes'));

// load product route
router.use('/products', require('./product_route'));

// load order route
router.use('/orders',require('./order_routes'));

// load request route
router.use('/requests',require('./request_routes'));

// load reviews routes
router.use('/reviews',require('./review_routes'));

module.exports = router;