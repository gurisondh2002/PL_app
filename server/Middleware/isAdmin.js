const Users = require('../models/user')

const isAdmin = async(user) => {
    const fetchedUser = await Users.findByPk(user.id)
    if(fetchedUser.role === 1){
        return true
    }
    else{
        return false
    }
}

module.exports = isAdmin