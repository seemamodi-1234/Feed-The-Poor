const Post =require("../../models/Food")

exports.updatePost = async(req,res) =>{
    try {
        const post= await Post.findOne({key:req.body.key})
        
        if(post){
            const updatepost = await Post.findOneAndUpdate({key:req.body.key},req.body.update,{new:true})

            if(updatepost){
                return res.status(200).json({
                    status: true,
                    message: "Post updated successfully",
                    Result:updatepost,
                })
            }
            else{
                throw new Error ("Unable to update Post")
            }
        }
        else{
            return res.status(200).json({
                status:false,
                message: "No Post available",
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