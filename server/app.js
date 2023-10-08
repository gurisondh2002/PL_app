const express = require("express");
const app = express();
const port = 3000
const sequelize = require('./utils/db')

const prod_service = require('./models/prod_service')


sequelize
    .sync()
    .then((result) => {
        console.log(result)
    })
    .catch((err) => { console.log(err) })


app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})