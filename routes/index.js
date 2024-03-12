const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');

router.use('/', require('./swagger'));
router.use('/user', requiresAuth(),require('./user'));
router.use('/theme', requiresAuth(),require('./theme'));

module.exports = router;