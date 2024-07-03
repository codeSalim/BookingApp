const User = require("../model/userModel.js");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    console.log(req.body);
    const exitinguser = await User.find({ email });
    if (exitinguser) {
    }
    const user = await User.create({ name, email, password, role });
    res.status(201).json({ user });
  } catch (error) {
    console.log(error);
  }
}
exports.login = async(req,res,next)=>{
  try {
    const {email,password} = req.body;
    const user = await User.find({email})
    if(!user){
      const error = new error ('user not valid please sign up first')
      error.statusCode = 400;
      throw error 
    }
    // check the password match or not with email

    const Matchpassword = await bcrypt.compare(password,user[0].password)
    if(!Matchpassword){
      const error  = new error ('password not match please check again')
      error.statusCode = 400;
      throw error
    }
    console.log(user[0]._id,user[0].role);

    // send the jsonwebtoken to the frontend

    const token = jwt.sign({id:user[0]._id,role:user[0].role,name:user[0].name},'this is my key',{expiresIn:'30d'})
    res.status(200).json({
      message:'succes',
      token
    })


  } catch (error) {
    next(error)
    
  }





}
