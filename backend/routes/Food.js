const express = require("express");
const router = express.Router();

const {createPost} = require("../controllers/Food/createPost")
const {updatePost} = require("../controllers/Food/updatePost")
const {getListOfPost} = require("../controllers/Food/getListOfPost");
const {deletePost} = require("../controllers/Food/deletePost");
const {getPostByUsername} = require("../controllers/Food/getPostByUsername")

router.post('/createPost',createPost);
router.post('/updatePost',updatePost);
router.post('/deletePost',deletePost);
router.get('/getListOfPost',getListOfPost);
router.get('/getPostByUsername/:username',getPostByUsername);

module.exports=router