const Users = require('../models/user');
const bcrypt = require("bcrypt");
const Cart = require('../models/cart')
const Prod_Services = require('../models/prod_service')

const registerController = async(req,res) =>{
    const {first_name, last_name ,email, password} = req.body;
    const user = Users.findOne({
        where: {
            email: email,
        }
    }).then(()=>{
        if(user){
            res.json({"message": "User Already Exists"})
        }else{
            bcrypt.hash(password, 10).then((hash)=>{
                Users.create({
                    first_name : first_name,
                    last_name : last_name,
                    email: email,
                    password:hash,
                    role:2,
                    is_active: true
                }).then(()=>{
                    res.json("SUCCESSFULLY REGISTERED")
                })
            })
        }
    })
}

const loginController = async(req,res)=>{
    const {email, password} = req.body;
    let user;
    return user = await Users.findOne({
        where :{
            email : email
        }
    }).then((user)=>{
        if(!user){
            res.json({"message":"User not registered"});
        }
        else{
            bcrypt.compare(password, user.password).then((match)=>{
                if(!match){
                    res.json({"message":"Wrong credentials"});
                }
                else{
                    res.json("Logged in successfully");
                }
            })
        }
    })
}

const getUserCart = async(req, res, next) => {
    req.user.getCart().then((cart) => {
        return cart.getProducts_services()
    })
        .then(products => {
            if (products.length > 0) {
                res.json(products)
            }
            else {
                res.json("Cart is empty!!")
            }
        })
}
const editCart = async (req, res, next) => {
    const prodId = req.body.pid;
    const method = req.body.method
    let fetchedCart;
    let newQuantity = 1;
    req.user
        .getCart()
        .then((cart) => {
            fetchedCart = cart
            return cart.getProducts_services({ where: { id: prodId } })
        })
        .then((products) => {
            let product;
            if (products.length > 0) {
                product = products[0]
            }
            if (method == "Increase") {
                if (product) {
                    const oldQuantity = product.cartItems.quantity;
                    newQuantity = oldQuantity + 1;
                    return product;
                }
                return Prod_Services.findByPk(prodId);
            }
            else if (method == "Decrease") {
                if (product) {
                    const oldQuantity = product.cartItems.quantity;
                    if (oldQuantity > 1) {
                        newQuantity = oldQuantity - 1;
                        return product;
                    }
                    else if (oldQuantity <= 1) {
                        newQuantity = oldQuantity;                        
                    }
                }
            }
        })
        .then((product) => {
            return fetchedCart.addProducts_services(product, {
                through: { quantity: newQuantity }
            })
        })
        .then(() => {
            res.json("Cart Updated!!")
        })
}

module.exports = {registerController, loginController , getUserCart, editCart }