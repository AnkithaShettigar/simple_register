const mongoose = require("mongoose")
const DB = "mongodb+srv://Ankitha:ankitha@cluster0.zxuiba0.mongodb.net/RegisterLogin?retryWrites=true&w=majority"
mongoose.connect(DB,{ useUnifiedTopology: true, useNewUrlParser: true })
.then(()=>{
    console.log("mongoDB connected");
})
.catch(()=>{
    console.log("failed to connect");
})

const newSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },

})

const collection = mongoose.model("newuser",newSchema)
module.exports = collection