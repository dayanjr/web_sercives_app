const express = require('express');
const router = express.Router();

const userController = require('../controllers/user');
const { auth, requiresAuth } = require('express-openid-connect');
router.get('/', requiresAuth(),userController.getAll);

router.get('/:username', requiresAuth(), userController.getUser);

router.post('/', requiresAuth(),userController.create);
router.put('/:username', requiresAuth(),userController.updateUser);
router.delete('/:username', requiresAuth(),userController.deleteUser);
module.exports = router;