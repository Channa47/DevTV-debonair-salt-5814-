const UserModel = require('../Models/UserModel');
const {Router} = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config
const UserRouter = Router();

UserRouter.get("/",async(req,res)=>{
  let Users = await UserModel.find();
  res.send(Users);
});

// name: String,
//     email: String,
//     username: String,
//     password: String,
//     country: String,
//     checkbox: Boolean

UserRouter.post('/reg',(req,res)=>{
    const { email, password, name, username,country,checkbox} = req.body;
    try{
            bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
              console.log(err);
              res.send({msg:err});
            } else {
              const ExistingUser = await UserModel.findOne({ email });
              if (ExistingUser) {
                res.send({msg:"User Already Exist"});
              } else {
                const user = new UserModel({ email, password: hash, name,username,country,checkbox });
                await user.save();
                res.send({msg:"user Registered",user:user});
              }
            }
          });
    }catch(e){
        console.log(e);
        res.send({msg:e});
    }
})

UserRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try {
        let User = await UserModel.find({ email: email });
        if (User.length > 0) {
          bcrypt.compare(password, User[0].password, (err, result) => {
            if (result) {
              var token = jwt.sign( {userID:User[0]._id} , process.env.key);
              res.send({ msg: "Login SuccessFull", token: token,user:User });
            } else {
              res.send({msg:'Wrong Password'});
            }
          });
        } else {
          res.send({msg:'User Not Exist'});
        }
      } catch (e) {
        res.send({msg:e});
      }
})

module.exports = UserRouter
