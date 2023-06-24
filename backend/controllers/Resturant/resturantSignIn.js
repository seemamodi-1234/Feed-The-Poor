const Resturant = require("../../models/Resturant");
const bcrypt = require("bcrypt");

exports.resturantSignIn = async (req, res) => {
    try {
        //console.log(req.body)
        const resturant = await Resturant.findOne({ username: req.body.username });
        !resturant && res.status(404).json({ error: "Restaurant not found" });

        const validPassword = await bcrypt.compare(req.body.password, resturant.hash_password)
        !validPassword && res.status(400).json({ error: "Wrong password" })

        res.status(200).json(resturant)
    } catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
};
