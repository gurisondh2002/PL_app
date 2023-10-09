const express = require('express');
const router = express.Router();
const Prod_Services = require('../models/prod_service');
const prods_servicesControllers = require('../controllers/prod_servicesController')


router.get('/products' , prods_servicesControllers.getAllProds)

router.get('/services' , prods_servicesControllers.getAllServices)

router.get('/:id', prods_servicesControllers.getProductById)

router.post('/create', prods_servicesControllers.createProduct)

module.exports = router;