const Resturant = require("../../models/Resturant")
const bcrypt = require("bcrypt")

exports.createResturant = async (req, res) => {
    try {
        const resturant= await Resturant.findOne({username:req.body.username})

        if(resturant){
            throw new Error("Username already Exists")
        }
        else{
            const newResturant = new Resturant(req.body);

            let fullName = req.body.firstName
            if(req.body.middleName) fullName =fullName + " " + req.body.middleName;
            fullName=fullName + " " + req.body.lastName

            newResturant.fullName =fullName;

            const hash_passwword = await bcrypt.hash(req.body.password,10);

            newResturant.hash_password = hash_passwword

            let doc = await newResturant.save();

            if (!doc) {
                throw new Error("Unable to add Resturant")
            }
            else{
                return res.status(200).json({
                    status: true,
                    message: "New Resturant Added Successfully",
                    Resturant: doc
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