const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const { auth, requiresAuth } = require('express-openid-connect');
router.get('/', userController.getAll);

router.get('/:username', requiresAuth(), userController.getUser);

router.post('/', userController.create);
router.put('/:username', userController.updateUser);
router.delete('/:username', userController.deleteUser);
module.exports = router;