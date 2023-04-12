const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/orders_controller');

router.get('/',ordersController.fetchAll);

module.exports = router;