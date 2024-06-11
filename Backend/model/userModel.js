const mongoose = require('mongoose')

const userSchema = new mongoose({
    Username:{
        type:String,
        required:true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
},{timestamps:true})

export const user = mongoose.model('user',userSchema)