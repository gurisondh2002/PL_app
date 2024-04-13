const Users = require('../models/user');
const bcrypt = require("bcrypt");
const Cart = require('../models/cart')
const Prod_Services = require('../models/prod_service')
const isAdmin =  require('../Middleware/isAdmin')

const registerController = async(req,res) =>{
    const {first_name, last_name ,email, password} = req.body;
    await Users.findOne({
        where: {
            email: email,
        }
    }).then((user)=>{
        if(user){
            res.json({"message": "User Already Exists"})
        }else{
            bcrypt.hash(password,10).then((hash)=>{
                Users.create({
                    first_name : first_name,
                    last_name : last_name,
                    email: email,
                    password:hash,
                    role:2,
                    is_active: true
                }).then(async(user)=>{
                    const admin = await isAdmin(user)
                    res.json({
                        message:"User Successfully Registered",
                        email: user.email,
                        isAdmin : admin
                    })
                })
            })
        }
    })
}

const loginController = async(req,res)=>{
    const {email, password} = req.body;
    let fetchedUser;
    await Users.findOne({
        where :{
            email : email
        }
    }).then((user)=>{
        if(!user){
            res.json({"message":"User not registered"});
        }
        else{
            fetchedUser = user;
            bcrypt.compare(password, user.password).then(async(match)=>{
                if(!match){
                    console.log(match)
                    res.json({"message":"Wrong credentials"});
                }
                else{
                    const userEmail = fetchedUser.email;
                    const admin = await isAdmin(fetchedUser)
                    res.json({
                        message:"Logged In Successfully",
                        email: userEmail,
                        isAdmin: admin
                    });
                }
            })
        }
    })
}

const getUserCart = async(req, res, next) => {
    req.user.getCart().then((cart) => {
        if(!cart){
            res.json("Cart is Empty")
        }else{
            return cart.getProducts_services()
        }
    }).then((products) => {
        console.log(products)
            // if (products.length > 0) {
            //     res.json(products)
            // }
            // else {
            //     res.json("Cart is empty!!")
            // }
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

const deleteProduct = async(req,res,next) => {
    req.user
    .getCart()
    .then((cart)=>{
        return cart.getProducts_services({where : {id : req.body.pid}})
    })
    .then((products)=>{
        let product;
        if(products.length > 0){
            product = products[0]
            return product
        }
    })
    .then(product => {
        product.cartItems.destroy()
    })
    .then(()=>{
        res.json("Product Deleted")
    })
}

const createOrder = async(req , res , next) => {
    req.user
    .getCart()
    .then(cart => {
        return cart.getProducts_services()
    })
    .then(products => {
        req.user
        .createOrder()
        .then(order => {
            order.addProducts_services(products.map(product => {
                product.orderItem = { quantity : product.cartItems.quantity}
                return product
            }))
        })
        .then(()=>{
            res.json("Order created!!")
        })
    })
}

const getOrder = async(req, res,next)=>{
    req.user
    .getOrders()
    .then((orders)=>{
        const order = orders[0];
        return order;
    })
    .then(order => {
        if(order){
           return order.getProducts_services()
        }
        else{
            res.json("No Order Placed Yet!!")
        }
    })
    .then(prods => {
        const final_products = prods.map((prod)=>{
            let amountNew;
            let prevAmount = (prod.amount*prod.orderItems.quantity)
            let taxAmount
            if(prod.type === 1){
                taxAmount = 200
                if(prod.amount <= 1000){
                    taxAmount = taxAmount*prod.orderItems.quantity
                    amountNew = prevAmount+taxAmount
                }
                if(1000<prod.amount <= 5000){
                    taxAmount = (taxAmount + prod.amount*(12/100))*prod.orderItems.quantity
                    amountNew = prevAmount + taxAmount;
                }
                if(prod.amount > 5000){
                    taxAmount = (taxAmount + prod.amount*(18/100))*prod.orderItems.quantity
                    amountNew = prevAmount + taxAmount
                }
            }
            if(prod.type === 2){
                taxAmount = 100;
                if(prod.amount <= 1000){
                    taxAmount = taxAmount*prod.orderItems.quantity
                    amountNew = prevAmount + taxAmount
                }
                if(1000<prod.amount<=8000){
                    taxAmount = (taxAmount + prod.amount*(10/100))*prod.orderItems.quantity
                    amountNew = prevAmount + taxAmount;
                }
                if( prod.amount > 8000){
                    taxAmount = (taxAmount + prod.amount*(15/100))*prod.orderItems.quantity
                    amountNew = prevAmount + taxAmount;
                }
            }
            prod.dataValues.totalFAmount = amountNew;
            prod.dataValues.totalOAmount = prevAmount;
            prod.dataValues.tax = taxAmount;
            return prod;
        })

        return final_products;
    })
    .then((finalProd)=>{
        let TotalFinalBillAmount = 0;
        let TotalOriginalBillAmount = 0;
        let TotalTaxAmount = 0;

        finalProd.map(finalPro => {
            TotalFinalBillAmount = TotalFinalBillAmount + finalPro.dataValues.totalFinalAmount
        })
        finalProd.map(finalPro => {
            TotalOriginalBillAmount = TotalOriginalBillAmount + finalPro.dataValues.totalOrignalAmount
        })
        finalProd.map(finalPro => {
            TotalTaxAmount = TotalTaxAmount + finalPro.dataValues.tax
        })

        const finalOrderData = {
            totalFinalBillAmount : TotalFinalBillAmount,
            totalTaxAmount : TotalOriginalBillAmount,
            totalorignalBillAmount : TotalTaxAmount,
            prodData : finalProd
        }

        return finalOrderData
    })
    .then(finalData => {
        res.json(finalData)
    })
}
module.exports = {registerController, loginController , getUserCart, editCart, deleteProduct, createOrder, getOrder}