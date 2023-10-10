const express = require('express');
const router = express.Router();
const Users = require('../models/user')
const UserController = require('../controllers/users')
const bcrypt = require("bcrypt")


router.post('/register', UserController.registerController)

router.post('/login',  UserController.loginController)

router.get("/cart", UserController.getUserCart)

router.post('/cart/update',UserController.editCart)

router.post('/cart/delete',UserController.deleteProduct)

router.post('/order/create',UserController.createOrder)

router.get('/order',UserController.getOrder)

module.exports = router;
