const User =require("../../models/User")

exports.getUserByUsername = async (req, res) => {
    try {
        const user = await User.findOne({ username:req.params.username })
        if (user) {
            return res.status(200).json({
                status: true,
                User: user
            })
        } else {
            return res.status(200).json({
                status: false,
                message:"User not Found"
            })
        }
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}