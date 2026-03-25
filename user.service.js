

const usermodel=require("../models/user.model")

module.exports.signup=async (req,res)=>{
    const{name,email,password,age}=req.body;
    await usermodel.insertMany({name,email,password,age})
    res.json({message:"success"})

}