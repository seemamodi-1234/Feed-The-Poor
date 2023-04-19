const Resturant = require("../../models/Resturant")

exports.createResturant = async (req, res) => {
    try {
        
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}