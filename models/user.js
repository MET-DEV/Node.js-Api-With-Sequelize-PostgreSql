const Sequelize=require('sequelize')

const db=require('../config/database')

const User=db.define('users',{
    
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    }
})


module.exports=User