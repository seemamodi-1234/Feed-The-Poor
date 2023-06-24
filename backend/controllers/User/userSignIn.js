const User = require("../../models/User");
const bcrypt = require("bcrypt");

exports.userSignIn = async (req, res) => {
    try {
        //console.log(req.body)
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(404).json({ error: "Restaurant not found" });

        const validPassword = await bcrypt.compare(req.body.password, user.hash_password)
        !validPassword && res.status(400).json({ error: "Wrong password" })

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json({ error: "Internal server error" })
    }
};
