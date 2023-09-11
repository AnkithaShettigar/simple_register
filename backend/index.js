const express = require('express')
const cors = require('cors')
const collection = require("./mongo")
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.get("/",(req,res)=>{
    res.json({result:"Hello world"})
})

app.post("/login",async(req,res)=>{
    const {email,password} = req.body
 
    try {
      const check = await collection.findOne({email:email})
 
      if(check){
         res.json("exist")
      }else{
         res.json("not exist")
      }
    } catch (error) {
     res.json("not exists")
      console.log(error);
    }
 })

 app.post("/",async(req,res)=>{
    const {email,password} = req.body

    const data = {
        email:email,
        password:password,
    }
 
    try {
      const check = await collection.findOne({email:email})
 
      if(check){
         res.json("exist")
      }else{
         res.json("not exist")
         await collection.insertMany([data])
      }
    } catch (error) {
     res.json("not exists")
      console.log(error);
    }
 })

app.listen(4000,()=>{
    console.log("app is running");
})