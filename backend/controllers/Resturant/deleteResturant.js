const Resturant = require("../../models/Resturant")

exports.deleteResturant = async (req, res) => {
    try {
        const deleteResturant = await Resturant.findOneAndDelete({ username: req.body.username });
        if (deleteResturant) {
                res.status(200).json({
                status: true,
                message: "Resturant deleted successfully",
            });
        } 
        else {
                res.status(200).json({
                status: false,
                message: "Resturant not found",
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