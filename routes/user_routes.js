const express = require('express');
const router = express.Router();
const passport = require('passport');

const users_controller = require('../controllers/users_controller');

//user profile
router.get('/profile/:id', passport.checkAuthentication, users_controller.profile);
router.post('/update/:id',passport.checkAuthentication,users_controller.update);

router.get('/signup', users_controller.signup);

router.get('/signin', users_controller.signin)

router.post('/create', users_controller.create);
router.post('/create-session', passport.authenticate(
    'local',
    { failureRedirect: '/users/signin' },
),
    users_controller.createSession);

router.get('/signout',users_controller.destroySession);

module.exports = router;