const express = require("express");
const router = express.Router();
const upload = require("../middlewares/Upload");

const {createUser} = require("../controllers/User/createUser")
const {updateUser} = require("../controllers/User/updateUser")
const {deleteUser} = require("../controllers/User/deleteUser")
const {getUserByUsername} =require("../controllers/User/getUserByUsername")
const {uploadProfilePicture} =require("../controllers/User/uploadProfilePicture")
const {userSignIn} = require("../controllers/User/userSignIn");

router.post('/userSignIn',userSignIn);
router.post('/createUser',createUser);
router.post('/deleteUser',deleteUser);
router.post('uploadProfilePicture',upload.single("file"),uploadProfilePicture);//do test
router.post('/updateUser',updateUser);
router.get('/getUserByUsername/:username',getUserByUsername);


module.exports=router