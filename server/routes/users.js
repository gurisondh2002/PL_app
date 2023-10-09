const express = require('express');
const router = express.Router();
const Users = require('../models/user')
const UserController = require('../controllers/users')
const bcrypt = require("bcrypt")


router.post('/register', UserController.registerController)

router.post('/login',  UserController.loginController)

module.exports = router;