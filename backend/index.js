const env=require('dotenv').config()
const cors=require('cors')
const express = require('express');
const cookieParser=require('cookie-parser')
const db = require('./db/db');
const categoryRoute = require("./routes/categoryRoute")
const sliderRoute=require("./routes/sliderRoute")
const userRoute=require("./routes/userRoute")


const app = express();
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials:true
}))
app.use("/api/category",categoryRoute)
app.use("/api/slider",sliderRoute)
app.use("/api/user",userRoute)
db()


app.listen(process.env.PORT||6000,()=>{
    console.log("Server is running on port "+process.env.PORT)
})