const User =require("../../models/User")

exports.deleteUser = async (req, res) => {
    try {
        const deleteuser = await User.findOneAndDelete({ username: req.body.username });
        if (deleteuser) {
                res.status(200).json({
                status: true,
                message: "User deleted successfully",
            });
        } 
        else {
                res.status(200).json({
                status: false,
                message: "User not found",
            });
        }
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}