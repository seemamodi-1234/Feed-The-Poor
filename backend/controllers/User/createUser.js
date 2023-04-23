const User =require("../../models/User")
const bcrypt = require("bcrypt")

exports.createUser = async(req,res) =>{
    try {
        const user= await User.findOne({username:req.body.username})

        if(user){
            throw new Error("Username already Exists")
        }
        else{
            const newUser = new User(req.body);

            let fullName = req.body.firstName
            if(req.body.middleName) fullName =fullName + " " + req.body.middleName;
            fullName=fullName + " " + req.body.lastName

            newUser.fullName =fullName;

            const hash_passwword = await bcrypt.hash(req.body.password,10);

            newUser.hash_password = hash_passwword

            let doc = await newUser.save();

            if (!doc) {
                throw new Error("Unable to add User")
            }
            else{
                return res.status(200).json({
                    status: true,
                    message: "New User Added Successfully",
                    User: doc
                })
            }
        }
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}
