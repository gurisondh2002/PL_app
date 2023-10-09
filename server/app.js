const express = require("express");
const app = express();
const port = 3000
const sequelize = require('./utils/db')

app.use(express.json());

const Prod_Services = require('./models/prod_service')
const Users = require('./models/user')
const Cart = require('./models/cart')

const ProdServiceRouter = require('./routes/prod_services');
app.use('/productsServices',ProdServiceRouter);

const UserRouter = require('./routes/users');
app.use('/user',UserRouter);

sequelize
    .sync()
    .then((result) => {
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => { console.log(err) })

