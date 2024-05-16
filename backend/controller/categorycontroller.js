const Category=require("../modal/categorymodal")

const createCategory=async(req,res) => {
    const {name,image} = req.body
    try {
        if(!name||!image){
            return res.status(400).json({msg:"Please fill all the fields"})
        }
        const existscategory = await Category.findOne({name})
        if(existscategory) return res.status(200).json({message:"Category already exists"})
            const newCategory =await Category.create({name,image})
        res.status(200).json({ sucess:true, message:"Category created successfully",newCategory})
        
    } catch (error) {
        res.status(500).json({message:"Error creating category",error})
        
    }
}
const getallCategories =async(req,res) => {
    try {
        const categories = await Category.find()
        res.status(200).json({ sucess:true, message:"Categories fetched successfully",categories})
        
    } catch (error) {
        res.status(500).json({message:"Error fetching categories",error})
        
    }
}
module.exports={createCategory,getallCategories}