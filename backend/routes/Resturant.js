const express = require("express");
const router = express.Router();

const {createResturant} = require("../controllers/Resturant/createResturant");
const {updateResturant} = require("../controllers/Resturant/updateResturant");

router.post('/createResturant',createResturant);
router.post('/updateResturant',updateResturant);

module.exports=router