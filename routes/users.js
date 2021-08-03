const express=require('express')
const app=express()
const router=express.Router()
const db=require("../config/database")

const security=require('../core/security/hashPassword')
const User=require("../models/user")

router.get('/',(req,res)=>User.findAll()
.then(users=>{
    res.json(users)
    
})
.catch(err=>console.log(err)))

router.get('/:id',(req,res)=>{
const {id}=req.params
User.findByPk(id)
.then(user=>{
    res.json(user)
    
})
.catch(err=>console.log(err))})


router.post('/add',async(req,res)=>{
    const password=await security.hashPass(req.body.password)
    const user=User.create({email:req.body.email,password:password})
    await user.save
    res.send('işlem başarılı')
    
})
module.exports=router;