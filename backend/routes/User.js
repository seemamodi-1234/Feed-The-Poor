const express = require("express");
const router = express.Router();
const upload = require("../middlewares/Upload");

const {createUser} = require("../controllers/User/createUser")
const {updateUser} = require("../controllers/User/updateUser")
const {deleteUser} = require("../controllers/User/deleteUser")
const {getUserByUsername} =require("../controllers/User/getUserByUsername")
const {uploadProfilePicture} =require("../controllers/User/uploadProfilePicture")
const {userSignOut} =require("../controllers/User/userSignOut")

router.post('/createUser',createUser);//do test
router.post('/updateUser',updateUser);//do test
router.post('/deleteUser',deleteUser);//do test
router.post('uploadProfilePicture',upload.single("file"),uploadProfilePicture);//do test
router.get('/getUserByUsername',getUserByUsername);//do test


module.exports=router