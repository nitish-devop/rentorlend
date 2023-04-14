const express = require('express');
const router = express.Router();
const passport = require('passport');
const servicesController = require('../controllers/service_controller');

router.get('/rent/:id',servicesController.rent);

router.get('/lend',passport.checkAuthentication,servicesController.lend);

router.get('/request',passport.checkAuthentication,servicesController.request);

module.exports = router;