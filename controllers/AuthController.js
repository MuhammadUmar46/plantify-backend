const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserSchema = require('../models/UsersSchema');

const users = [];

const AuthController = {
    // Signup Controller 

    signup:(req,res)=>{
        const user = {email,password} = req.body;
        if(!user.email || !user.password){
        return res.status(400).send("Credential Error")
        }
        const hash =  bcrypt.hashSync(password,10);
        user.password = hash;
        users.push(user);
        res.json(user);
    },
    // Login Controller

    login:(req,res)=>{
        const user = req.body;
    
        const oldUser = users.find((user)=>user.email === req.body.email);
        if(!oldUser){
            return res.status(400).send("Credential Error");
        }
        UserSchema.findOne({email:email},(err)=>{
            if(err){
                res.json({
                    message:"Internal Server Error",
                    status:false
                }
                )
                return;
            }
        })
        const PasswordValid =  bcrypt.compare(
            user.password,
            oldUser.password
        );
        if(!PasswordValid){
            return res.status(400).send("Credential Error");
        }
        const token = jwt.sign({user:{
            email:user.email,
            password:user.password,
        }},
        "secret12032",
        {
            expiresIn:"24h",
            
        });
        res.json({token});
    },
    
}
    module.exports = AuthController;

