const express = require('express');
var cors = require('cors')
const app = express();
const UserRouter = require('./Routes/UserRoutes');
const AdminRouter = require('./Routes/AdminRoutes')
const  connection = require('./Config/db')
require('dotenv').config

app.use(express.json());
app.use(cors({origin:"*"}))
app.use('/user',UserRouter)
app.use('/admin',AdminRouter);

app.get("/",(req,res)=>{
    res.send("Hello add /user to get all users thank you :)")
})

app.listen(process.env.port,async()=>{
    try{
        connection;
        console.log("Connected To DB")
    }catch(e){
        consopple.log(e)
    }
    console.log(`Server Running ${process.env.port}`)
});