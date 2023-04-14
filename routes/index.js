const express = require('express');
const Product = require('../models/Product');
const router = express.Router();

// landing page 
router.get('/',async function(req,res){
    const products = await Product.find().populate('user');
    console.log(products)
    res.render('home',{
        title : 'Home | RentOrLend',
        products
    })
})

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