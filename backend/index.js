const express =require('express');
const env =require('dotenv');
const app=express();
const mongoose =require('mongoose');
const bodyParser =require('body-parser');
const path = require("path");
const multer = require("multer");
//const cors =require('cors');


env.config();

const { connectDb } = require('./config/connectDb')
connectDb()

//app.use(cors());
app.use("/images", express.static(path.join(__dirname, "public/images")));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "public/images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    try {
      return res.status(200).json("File uploded successfully");
    } catch (error) {
      console.error(error);
    }
  });

const resturantRoutes =require("./routes/Resturant");
const userRoutes =require("./routes/User");
const postRoutes =require("./routes/Food");

app.use("/api/resturant", resturantRoutes);
app.use("/api/user",userRoutes);
app.use("/api/post",postRoutes);


app.listen(process.env.PORT,()=>{
    console.log(`> Server is running on port ${process.env.PORT}`);
});