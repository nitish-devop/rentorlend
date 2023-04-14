const express = require('express');
const router = express.Router();
const passport = require('passport');

const productsController = require('../controllers/product_controller');

// Only User can create
router.post('/create',passport.checkAuthentication,productsController.createProduct);

// delete 
router.get('/destroy/:id',passport.checkAuthentication,productsController.destroyProduct);
module.exports = router;