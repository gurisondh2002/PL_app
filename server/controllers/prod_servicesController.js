const Prod_Services = require('../models/prod_service');


const getAllProds = async(req,res,next)=>{
    const listofprods = await Prod_Services.findAll({
        where: {
          Type: 1
        }
      })
    res.json(listofprods)
}

const getAllServices = async(req,res,next)=>{
    const listOfServices = await Prod_Services.findAll({
        where : {
            Type: 2
        }
    })
    res.json(listOfServices)
}

const getProductById = async(req,res,next)=>{
    const id = req.params.id;
    const prod = await Prod_Services.findByPk(id);
    res.json(prod);
}

const createProduct =  async(req,res)=>{
    const product = req.body;
    const result = await Prod_Services.create(product);
    res.json(result);
}

module.exports = {getAllProds, getProductById, createProduct, getAllServices}