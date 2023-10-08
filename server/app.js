const express = require("express");
const app = express();
const port = 3000
const sequelize = require('./database/db')

const Prod_Services = require('./models/prod_service')


sequelize
    .sync()
    .then((result) => {
        console.log(result);
        app.listen(port, () => {
            console.log(`Server running on port ${port}`)
        })
    })
    .catch((err) => { console.log(err) })

