const Resturant = require("../../models/Resturant")

exports.getListOfResturants = async (req, res) => {
    try {
        let query = {};

        if (req.query.resturantType) {
            query['resturantType'] = req.query.resturantType;
        }

        let list;

        if (Object.keys(query).length > 0) {

            list = await Resturant.find(query);
        } else {
            list = await Resturant.find()
        }

        if (list.length > 0) {
            return res.status(200).json({
                status: true,
                Resturants: list,
            })
        } else {
            return res.status(200).json({
                status: false,
                message: 'No Available Resturants',
               
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