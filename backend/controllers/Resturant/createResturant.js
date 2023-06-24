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
            console.log(req.body)
            let fullName = req.body.firstName
            if(req.body.middleName) fullName =fullName + " " + req.body.middleName;
            fullName=fullName + " " + req.body.lastName

            newResturant.fullName =fullName;
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(req.body.password, salt);

            newResturant.hash_password = hashedPassword
            console.log(newResturant)

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