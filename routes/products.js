const express=require('express')
const app=express()
const router=express.Router()
const db=require('../config/database')

const Product=require('../models/product')

router.get('/',(req,res)=>{
    Product.findAll()
    .then((products)=>{res.json(products)})
    .catch(err=>console.log(err))
})
module.exports=router;