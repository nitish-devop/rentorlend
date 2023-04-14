const express = require('express');
const router = express.Router();
const reviews_controller = require('../controllers/reviews_controller')

router.post('/create',reviews_controller.createReview);
router.get('/destroy',reviews_controller.destroyReview);


module.exports = router;