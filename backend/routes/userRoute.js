const express= require('express');
const {registerUser,userlogin, userLogout} = require('../controller/usercontroller');
const router=express.Router();

router.post("/register",registerUser)
router.post("/login",userlogin)
router.get("/logout",userLogout)





module.exports= router