const express = require("express");
const router = express.Router();

const {createPost} = require("../controllers/Food/createPost")

router.post('/createPost',createPost);

module.exports=router