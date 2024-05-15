const env=require('dotenv').config()
const cors=require('cors')
const express = require('express');
const db = require('./db/db');


const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    origin: '*',
    credentials:true
}))
app.get("/",(req, res) =>{
    res.send("Hello World")
})
db()


app.listen(process.env.PORT||6000,()=>{
    console.log("Server is running on port "+process.env.PORT)
})