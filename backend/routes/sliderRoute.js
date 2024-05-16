const express=require('express')
const {createSlider,getSlider} = require('../controller/slidercontroller')
const router=express.Router()

router.post("/createslider",createSlider)
router.get("/getslider",getSlider)


module.exports =router