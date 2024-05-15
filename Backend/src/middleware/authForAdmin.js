import jwt from 'jsonwebtoken';


export const authForAdmin   = (req,res,next) => {
    let token = req.header("token");
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.json({ message: "Token invalid", err })
        req.userId = decoded.id;
    if (decoded.role==="user") {
        return res.json({message:"you are not authenticated"})
    }else {
        next()
    }
        
    })

}