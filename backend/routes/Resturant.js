const express = require("express");
const router = express.Router();
const upload = require("../middlewares/Upload");

const {createResturant} = require("../controllers/Resturant/createResturant");
const {updateResturant} = require("../controllers/Resturant/updateResturant");
const {deleteResturant} = require("../controllers/Resturant/deleteResturant");
const {getResturantByUsername} = require("../controllers/Resturant/getResturantByUsername");
const {getListOfResturants} = require("../controllers/Resturant/getListOfResturants");
const {resturantSignOut} = require("../controllers/Resturant/resturantSignOut");
const {uploadProfilePicture} = require("../controllers/Resturant/uploadProfilePicture");

router.post('/createResturant',createResturant);
router.post('/updateResturant',updateResturant);
router.post('/deleteResturant',deleteResturant);
router.put('uploadProfilePicture',upload.single("file"),uploadProfilePicture);//do test
router.get('/getListOfResturants',getListOfResturants);
router.get('/getResturantByUsername',getResturantByUsername);


module.exports=router