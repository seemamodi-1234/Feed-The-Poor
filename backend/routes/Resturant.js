const express = require("express");
const router = express.Router();

const {createResturant} = require("../controllers/Resturant/createResturant");

router.post('/createResturant',createResturant);

module.exports=router