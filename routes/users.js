const express=require('express')
const app=express()
const router=express.Router()
const db=require("../config/database")


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
    const user=User.create({email:req.body.email,password:req.body.password})
    await user.save
    
})
module.exports=router;