const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: validator.isEmail,
            massage: "please enter a valid email"
        }
    },
    password:{
        type:String,
        required:true,
        validate:{
            validator:function(value){
                return validator.isStrongPassword(value,{
                    minLength:8,
                    minLowercase:1,
                    minNumbers:1,
                    minSymbols:1,
                    minUppercase:1,
                })
            }
        }
        
    },

        role:{
            type:String,
            enum:['admin','user'],
            default:'user'
        }
},{timestamps:true})

const User = mongoose.model('User',userSchema)

module.exports = User