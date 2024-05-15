import { Schema, model } from "mongoose";
    
const userSchema=new Schema ({
name:{
    type:String,
    required:true,
},
email:{
    unique:true,
    required:true,
    type:String
},
password:{
    type:String,
    required:true,
}, address:{
    type:String,
    required:true
},
role:{
    type:String,
    enum:[ 'admin', 'user'], 
    default:'user'  
},
phoneNum:{
    type:String,
}
})

export const userModel = model("User", userSchema);