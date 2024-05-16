const express=require('express')
const {createCategory,getallCategories} = require('../controller/categorycontroller')
const router=express.Router()

router.post("/addcategory",createCategory)
router.get("/getcategory",getallCategories)
module.exports=router