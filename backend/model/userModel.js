import mongoose, { Schema }  from "mongoose";




const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    profilepic:{
        type:String,
        default:""
    }
},{timestamps:true}
)

const User=mongoose.model('User',userSchema)
