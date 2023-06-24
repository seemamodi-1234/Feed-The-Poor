const Post =require("../../models/Food")

exports.likePost = async (req, res) => {
    try {
        //console.log(req.body)
        //console.log(req.params)
      const post = await Post.findOne({key:req.params.key});
      //console.log(post)
      if (!post.likes.includes(req.body.username)) {
        await post.updateOne({ $push: { likes: req.body.username } });
        res.status(200).json({message:"The post has been liked"});
      } else {
        await post.updateOne({ $pull: { likes: req.body.username } });
        res.status(200).json({message:"The post has been disliked"});
      }
    } catch (err) {
      res.status(500).json(err);
    }
};