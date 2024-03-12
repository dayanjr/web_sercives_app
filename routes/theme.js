const express = require('express');
const router = express.Router();
const { auth, requiresAuth } = require('express-openid-connect');
const themeController = require('../controllers/theme');

router.get('/:themeName', requiresAuth(),themeController.getTheme);

module.exports = router;