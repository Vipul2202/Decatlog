const express= require('express');
const {registerUser,userlogin} = require('../controller/usercontroller');
const router=express.Router();

router.post("/register",registerUser)
router.post("/login",userlogin)





module.exports= router