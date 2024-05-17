const jwt = require("jsonwebtoken");
const Auth=(req,res,next)=>{
    const {token}=req.cookies
    if(!token)return res.status(404).json({message:"user not authenticated"})
        try {
    const decoded=jwt.verify(token,process.env.SECRET_KEY)
    req.user=decoded._id
    next()
            
        } catch (error) {
            res.status(404).json({message:"user not authenticated"})
            
        }

}
module.exports=Auth