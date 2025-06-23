const User=require('../models/usermodel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


exports.register = async (req,res)=>{
    const {name,email,password} =req.body;
    try {
      const existingUser  =   User.findOne({email});
      if(existingUser) return res.status(400).json({message:"user already exists"});
      const hashedPassedword = await bcrypt.hash(password,10);
      const newUser = await User.create({
        name,
        email,
        password:hashedPassedword
      });
      res.status(201).json({messsage:"registration successful",data:newUser})
    } catch (error) {
        res.status(500).json({message:"server error"})
    }
}

exports.login = async (req,res)=>{
    const {email,password}=req.body;
    try {
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({message:"user not found"});

        const match = await bcrypt.compare(password,user.password);
        if(!match) return res.status(400).json({message:"password is incorrect"});

        const token = jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        res.status(201).json({message:"login successful",data:token})
    } catch (error) {
      res.status(500).json({message:"server error"})  
    }
}