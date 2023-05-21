const Post =require("../../models/Food")

exports.createPost = async(req,res) =>{
    try {
        const post= await User.findOne({Key:req.body.Key})

        if(post){
            throw new Error("Post already Exists")
        }
        else{
            const newPost = new Post(req.body);

            let key = req.body.username + "-" +new Date().getDate() + "-" +req.body.mealtime;

            newPost.key=key

            let doc = await newPost.save();

            if (!doc) {
                throw new Error("Unable to create Post")
            }
            else{
                return res.status(200).json({
                    status: true,
                    message: "New Post Created Successfully",
                    Post: doc
                })
            }
        }
    }
    catch (err) {
        return res.status(500).json({
            status: false,
            error: err.toString()
        })
    }
}
