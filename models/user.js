import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:String,
    email:String,
    password:String,
    isVerfied:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
})
const user=mongoose.models.users ||mongoose.model("users",userSchema)

export default user