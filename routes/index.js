const express = require('express');
const router = express.Router();

// landing page 
router.get('/',function(req,res){
    res.render('home',{
        title : 'Home | RentOrLend'
    })
})

//load users route
router.use('/users', require('./user_routes'));

// load product route
router.use('/product', require('./product_route'));

// load order route
router.use('/orders',require('./order_routes'));

module.exports = router;