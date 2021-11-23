const express = require('express');
const router = express.Router();
const passport = require('../../services/passport')
const usersController = require('./usersController')


router.post('/login', passport.authenticate('local', { session: false }), usersController.login);
router.get('/profile', passport.authenticate('jwt', { session: false }), usersController.profile);


module.exports = router;

