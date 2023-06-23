const Post =require("../../models/Food")

exports.getPostByUsername = async (req, res) => {
    try {

        list = await Post.find({resturantUsername:req.params.username})

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