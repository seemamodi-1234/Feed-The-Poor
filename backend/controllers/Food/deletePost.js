const Post =require("../../models/Food")

exports.deletePost = async (req, res) => {
    try {
        const deletePost = await Post.findOneAndDelete({ key: req.body.key });
        if (deletePost) {
                res.status(200).json({
                status: true,
                message: "Post deleted successfully",
            });
        } 
        else {
                res.status(200).json({
                status: false,
                message: "Post not found",
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