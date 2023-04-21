exports.resturantSignOut =async(req,res)=>{
    res.clearCookie('token');
    res.status(200).json({
        message:'Signout successfully...!'
    })
}