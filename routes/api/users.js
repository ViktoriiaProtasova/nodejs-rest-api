const express = require('express');
const { validateBody, authenticate, upload } = require('../../middlewares');
const { schemas } = require('../../models/user');
const ctrl = require('../../controllers/users');

const router = express.Router();

router.post('/register', validateBody(schemas.registerSchema), ctrl.register);
router.get('/verify/:verificationToken', ctrl.verificationEmail);
router.post('/login', validateBody(schemas.loginSchema), ctrl.login);
router.post('/verify', validateBody(schemas.emailSchema), ctrl.resendVerifyEmail);
router.get('/current', authenticate, ctrl.getCurrent);
router.get('/avatars/:fileName', ctrl.getAvatar);
router.post('/logout', authenticate, ctrl.logout);
router.patch('/', authenticate, ctrl.updateSubscription);
router.patch('/avatars', authenticate, upload.single('avatar'), ctrl.updateAvatar);

module.exports = router;
