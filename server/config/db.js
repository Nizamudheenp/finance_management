const mongoose = require("mongoose");
require('dotenv').config();

const connectDB= async ()=>{
    try {
        const db = await mongoose.connect(process.env.MONGO_URI);
        if(db){
            console.log("database connection successful");
        }
    } catch (error) {
       console.log('database connection error');
        
    }
}
module.exports = connectDB;