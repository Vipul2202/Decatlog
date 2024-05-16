const slider=require("../modal/slidermodal")

const createSlider = async(req,res)=>{
    const {title,description,image,link} = req.body
    try {
        if(!title||!description||!image||!link) return res.status(400).json({success:false, message:"fill all fields"})
            const sliderdata=await slider.create({
        title,
        description,
        image,
        link
        })
        res.status(200).json({success:true, message:"slider created successfully",sliderdata})
        
    } catch (error) {
        console.log("error creating slider",error)
        res.status(500).json({success:false, message:"error creating slider",error})
        
    }
}
const getSlider = async(req,res)=>{
    try {
        const sliderdata=await slider.find()
        res.status(200).json({success:true, message:"slider fetched successfully",sliderdata})
        
    } catch (error) {
        console.log("error fetching slider",error)
        res.status(500).json({success:false, message:"error fetching slider",error})
        
    }
}



module.exports={createSlider,getSlider}