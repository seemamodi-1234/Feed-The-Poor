const Post =require("../../models/Food")

exports.getListOfPost = async (req, res) => {
    try {
        let query = {};

        if (req.query.foodType) {
            query['foodType'] = req.query.foodType;
        }

        let list;

        if (Object.keys(query).length > 0) {

            list = await Post.find(query);
        } else {
            list = await Post.find()
        }

        if (list.length > 0) {
            return res.status(200).json({
                status: true,
                Posts: list,
            })
        } else {
            return res.status(200).json({
                status: false,
                message: 'No Available Posts',
               
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