const express = require('express');
const router = express.Router();
const requestsController = require('../controllers/requests_controller');


router.post('/new',requestsController.createRequest);

module.exports = router;