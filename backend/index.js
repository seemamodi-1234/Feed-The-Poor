const express =require('express');
const env =require('dotenv');
const app=express();
const mongoose =require('mongoose');
const path  =require('path');
//const cors =require('cors');


env.config();

const { connectDb } = require('./config/connectDb')
connectDb()

//app.use(cors());
app.use(express.json());



app.listen(process.env.PORT,()=>{
    console.log(`> Server is running on port ${process.env.PORT}`);
});