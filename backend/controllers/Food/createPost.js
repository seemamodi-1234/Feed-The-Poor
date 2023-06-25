const Post =require("../../models/Food")

exports.createPost = async(req,res) =>{
    try {
        const post= await Post.findOne({key:req.body.key})
        //console.log(req.body.key)

        if(post){
            throw new Error("Post already Exists")
        }
        else{
            const newPost = new Post(req.body);

            //let key = req.body.username + "-" +new Date().getDate() + "-" +req.body.mealTime;
            newPost.resturantUsername=req.body.username

            newPost.key=req.body.key

            let doc = await newPost.save();
            console.log(doc)
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
