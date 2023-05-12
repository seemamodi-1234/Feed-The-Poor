const Resturant = require("../../models/Resturant")

exports.getResturantByUsername = async (req, res) => {
    try {
        const resturant = await Resturant.findOne({ username:req.params.username })
        if (resturant) {
            return res.status(200).json({
                status: true,
                Resturant: resturant
            })
        } else {
            return res.status(200).json({
                status: false,
                message:"Resturant not Found"
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