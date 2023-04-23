const Resturant =require("../../models/Resturant")

exports.uploadProfilePicture = async (req, res) => {
    try {
        const resturant = await Resturant.findOne({ username:req.body.username })
        if (resturant) {
            if(req.file){
                resturant.profilePicture =process.env.API+'/public/'+req.file.filename;

                const doc=await resturant.save();
                if(!doc) throw new Error("Profile picture not added")
                else{
                    return res.status(200).json({
                        status: true,
                        message:"Profile picture added",
                        resturant:doc
                    })
                }
            }
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