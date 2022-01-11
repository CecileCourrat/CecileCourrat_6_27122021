const express = require('express');
//Création du routeur
const router = express.Router();

const password = require('../middleware/password');

const limiter = require('../middleware/limiter');

const userCtrl = require('../controllers/user');

router.post('/signup', password, userCtrl.signup);
router.post('/login', limiter.loginLimiter, userCtrl.login);


module.exports = router;