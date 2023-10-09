const express = require('express');
const router = express.Router();
const Prod_Services = require('../models/prod_service');
const Users = require('../models/user')
const prods_servicesControllers = require('../controllers/prod_servicesController')
const bcrypt = require("bcrypt");
const UserController = require('../controllers/users')



router.get('/products' , prods_servicesControllers.getAllProds)

router.get('/services' , prods_servicesControllers.getAllServices)

router.get('/:id', prods_servicesControllers.getProductById)

router.post('/create', prods_servicesControllers.createProduct)

router.post('/register', UserController.registerController)

router.post('/login',async(req,res)=>{

})

module.exports = router;