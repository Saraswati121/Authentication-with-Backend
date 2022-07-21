const User= require("../models/user")
const {Router} = require("express")

const userRouterers= Router()

userRouterers.get("/:userId",async (req,res)=>{
    const {userId} = req.params;
    const user= await User.findById(userId)
    if(user){
        res.send(user)
    }else{
        res.status(404).send({message:"User not found"})
    }
})

module.exports= userRouterers;