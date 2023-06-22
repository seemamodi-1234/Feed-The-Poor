const express =require('express');
const env =require('dotenv');
const app=express();
const mongoose =require('mongoose');
const path  =require('path');
const bodyParser =require('body-parser');
//const cors =require('cors');


env.config();

const { connectDb } = require('./config/connectDb')
connectDb()

//app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const resturantRoutes =require("./routes/Resturant");
const userRoutes =require("./routes/User");
const postRoutes =require("./routes/Food");

app.use("/api/resturant", resturantRoutes);
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`> Server is running on port ${process.env.PORT}`);
});