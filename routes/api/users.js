const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');

const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST TO API/USERS
router.post('/', usersCtrl.create);
// Post /api/users/login
// router.post('/login', usersCtrl.login)
// Get /api/users/check-token
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken)

module.exports = router;