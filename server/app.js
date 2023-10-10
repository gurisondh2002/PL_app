const express = require("express");
const app = express();
const port = 3000
const sequelize = require('./utils/db')
const cors = require('cors')

app.use(express.json());
app.use(cors());

const Prod_Services = require('./models/prod_service')
const Users = require('./models/user')
const Cart = require('./models/cart')
const CartItems = require('./models/cartItems')

app.use((req, res, next) => {
    Users.findByPk(1)
        .then(user => {
            req.user = user;
            next();
        })
        .catch(err => console.log(err));
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
        .then(result => {
            return Users.findByPk(1);
            // console.log(result);
        })
        .then(user => {
            if (!user) {
                return Users.create({ first_name: 'test', last_name:"user", email: 'test@test.com', password:"testpass", role: 2, is_active:1 });
            }
            return user;
        })
        // .then(user => {
        //     return user.createCart();
        // })
        .then(cart => {
            app.listen(3000,()=>{
                console.log(`Server running on port ${port}`)
            });
        })
        .catch((err) => {
            console.log(err)
        }
        )