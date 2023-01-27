const AdminModel = require("../Models/AdminModel")
const {Router} = require('express');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require('dotenv').config
const AdminRouter = Router();

AdminRouter.get('/',async(req,res)=>{
    let Admins = await AdminModel.find();
    res.send(Admins);
})

AdminRouter.post('/reg',(req,res)=>{
    const { email, password, name, username} = req.body;
    try{
            bcrypt.hash(password, 5, async (err, hash) => {
            if (err) {
              console.log(err);
              res.send({msg:err});
            } else {
              const AxistingAdmin = await AdminModel.findOne({ email });
              if (AxistingAdmin) {
                res.send({msg:"Admin Already Exist"});
              } else {
                const user = new AdminModel({ email, password: hash, name,username});
                await user.save();
                res.send({msg:"Admin Registered",user:user});
              }
            }
          });
    }catch(e){
        console.log(e);
        res.send({msg:e});
    }
})

AdminRouter.post('/login',async(req,res)=>{
    const {email,password} = req.body;
    try {
        let Admin = await AdminModel.find({ email: email });
        if (Admin.length > 0) {
          bcrypt.compare(password, Admin[0].password, (err, result) => {
            if (result) {
              var token = jwt.sign( {userID:Admin[0]._id} , process.env.key);
              res.send({ msg: "Login SuccessFull", token: token,admin:Admin });
            } else {
              res.send({msg:'Wrong Password'});
            }
          });
        } else {
          res.send({msg:'Admin Not Exist'});
        }
      } catch (e) {
        res.send({msg:e});
      }
})

module.exports = AdminRouter;