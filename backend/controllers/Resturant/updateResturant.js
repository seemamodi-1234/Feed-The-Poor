const Resturant = require("../../models/Resturant")

exports.updateResturant = async (req, res) => {
    try {
        const resturant= await Resturant.findOne({username:req.body.username})
        
        if(resturant){
            const updateresturant = await Resturant.findOneAndUpdate({username:req.body.username},req.body.update,{new:true})

            if(updateresturant){
                return res.status(200).json({
                    status: true,
                    message: "Resturant updated successfully",
                    Result:updateresturant,
                })
            }
            else{
                throw new Error ("Unable to update Resturant")
            }
        }
        else{
            return res.status(200).json({
                status:false,
                message: "No Resturant registered with this username",
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