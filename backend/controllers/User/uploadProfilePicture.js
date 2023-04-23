const User =require("../../models/User")

exports.uploadProfilePicture = async (req, res) => {
    try {
        const user = await User.findOne({ username:req.body.username })
        if (user) {
            if(req.file){
                user.profilePicture =process.env.API+'/public/'+req.file.filename;

                const doc=await user.save();
                if(!doc) throw new Error("Profile picture not added")
                else{
                    return res.status(200).json({
                        status: true,
                        message:"Profile picture added",
                        user:doc
                    })
                }
            }
        } else {
            return res.status(200).json({
                status: false,
                message:"User not Found"
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