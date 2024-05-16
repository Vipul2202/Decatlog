const mongoose=require('mongoose')
const sliderSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }

},{timestamps:true})
module.exports=mongoose.model("Slider",sliderSchema)