const jwt = require('jsonwebtoken');
require('dotenv').config();

const authMiddleware = async(req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1] ;
    if(!token) return res.status(401).json({message:"no token provided"});
    try {
       const decoded = jwt.verify(token,process.env.JWT_SECRET);
       req.userId = decoded.id;
        next()
    } catch (error) {
        res.status(401).json({ message: 'Invalid token' });
    }
}

module.exports = authMiddleware