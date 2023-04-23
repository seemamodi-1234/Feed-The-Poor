const User =require("../../models/User")

exports.updateUser = async (req, res) => {
    try {
        const user= await User.findOne({username:req.body.username})
        
        if(user){
            const updateuser = await User.findOneAndUpdate({username:req.body.username},req.body.update,{new:true})

            if(updateuser){
                return res.status(200).json({
                    status: true,
                    message: "User updated successfully",
                    Result:updateuser,
                })
            }
            else{
                throw new Error ("Unable to update User")
            }
        }
        else{
            return res.status(200).json({
                status:false,
                message: "No User registered with this username",
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