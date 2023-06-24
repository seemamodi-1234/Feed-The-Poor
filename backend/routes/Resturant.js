const express = require("express");
const router = express.Router();
const upload = require("../middlewares/Upload");

const{authenticate}=require("../middlewares/Auth")
const {createResturant} = require("../controllers/Resturant/createResturant");
const {updateResturant} = require("../controllers/Resturant/updateResturant");
const {deleteResturant} = require("../controllers/Resturant/deleteResturant");
const {getResturantByUsername} = require("../controllers/Resturant/getResturantByUsername");
const {getListOfResturants} = require("../controllers/Resturant/getListOfResturants");
const {uploadProfilePicture} = require("../controllers/Resturant/uploadProfilePicture");
const {resturantSignIn} = require("../controllers/Resturant/resturantSignIn");

router.post('/resturantSignIn',resturantSignIn);
router.post('/createResturant',createResturant);
router.post('/updateResturant',updateResturant);
router.post('/deleteResturant',deleteResturant);
router.put('uploadProfilePicture',upload.single("file"),uploadProfilePicture);//do test
router.get('/getListOfResturants',getListOfResturants);
router.get('/getResturantByUsername',getResturantByUsername);


module.exports=router