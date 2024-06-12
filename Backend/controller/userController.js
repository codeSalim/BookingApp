const User = require('../model/userModel.js');
exports.signup = async(req,res)=>{
    try {
        const {name,email,password,role} = req.body
        console.log(req.body);
        const exitinguser = await User.find({email})
            if(exitinguser){
               
                        }
            const user = await User.create({ name,
                email,
                password,
                role})
            res.status(201).json({user})  

    } catch (error) {
        console.log(error);
        
    }

}
