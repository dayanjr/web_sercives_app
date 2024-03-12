const router = require('express').Router();
const { auth, requiresAuth } = require('express-openid-connect');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swaggerDesign.json'); // don't want to override this with npm run swagger
router.use('/api-docs', requiresAuth(),swaggerUi.serve);
router.get('/api-docs', requiresAuth(),swaggerUi.setup(swaggerDocument));

module.exports = router;