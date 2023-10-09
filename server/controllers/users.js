const Users = require('../models/user');
const bcrypt = require("bcrypt");

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

module.exports = {registerController}