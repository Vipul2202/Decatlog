const mongoose = require('mongoose')
const db=async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/decatlog")
        console.log("connected to db")
        
    } catch (error) {
        console.log("mongoose error",error)
        
    }
}
module.exports=db