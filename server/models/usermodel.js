const  Mongoose  = require("mongoose");

const userSchema = new Mongoose.Schema({
    name:{type:String,required: true,},
    email:{type:String,unique:true,required: true},
    password:{type:String,required: true}
},{
    timestamps:true
});

module.exports = Mongoose.model('User',userSchema)