const express = require("express");
const app = express();
const port = 3000
const sequelize = require('./utils/db')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));


const Prod_Services = require('./models/prod_service')
const Users = require('./models/user')
const Cart = require('./models/cart')
const CartItems = require('./models/cartItems')

app.use(async(req, res, next) => {
    if (req.headers['email']) {
        const uEmail = req.headers['email']
        console.log(uEmail)
        await Users.findOne({
            where: {
                email: uEmail
            }
        }).then(user => {
            if (!user) {
                req.user = ""
            } else {
                req.user = user
            }
        })
    }
    next()
});

const ProdServiceRouter = require('./routes/prod_services');
app.use('/productsServices',ProdServiceRouter);

const UserRouter = require('./routes/users');
const Order = require("./models/order");
const OrderItems = require("./models/orderItems");
app.use('/user',UserRouter);

Prod_Services.belongsTo(Users, { constraints: true, onDelete: 'CASCADE' });
Users.hasMany(Prod_Services);
Users.hasOne(Cart);
Cart.belongsTo(Users , { constraints: true, onDelete: 'CASCADE' });
Cart.belongsToMany(Prod_Services, { through: CartItems });
Prod_Services.belongsToMany(Cart, { through: CartItems });
Users.hasMany(Order);
Order.belongsTo(Users);
Order.belongsToMany(Prod_Services, {through : OrderItems})

    
    sequelize
        .sync()
        .then(res =>{
            app.listen(3001,()=>{
                console.log(`Server running on port ${port}`)
            });
        })
        .catch((err) => {
            console.log(err)
        }
        )