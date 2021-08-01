const Sequelize=require('sequelize')

const db=require("../config/database")


const Product=db.define('products',{
    
    product_name:{
        type:Sequelize.STRING
    },
    
    supplier_id:{
        type:Sequelize.INTEGER
    },
    category_id:{
        type:Sequelize.INTEGER
    },
    quantity_per_unit:{
        type:Sequelize.STRING
    },
    unit_price:{
        type:Sequelize.DOUBLE
    },
    units_in_stock:{
        type:Sequelize.INTEGER
    }
    


})
module.exports=Product