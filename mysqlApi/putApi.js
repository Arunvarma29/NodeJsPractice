const mysql=require('mysql2')
const express=require('express');
const con = require('./config');

const app=express();
app.use(express.json())

// app.put('/putapi',(req,res)=>{
app.put('/:id',(req,res)=>{
    // const data=['tony','tony@xyz.com','tony123','2024-01-06 08:15:00','john_doe']
    const data=[req.body.username,req.body.email,req.body.password,req.body.create_time,req.params.id]
    con.query("UPDATE user SET username=?, email=?, password=?, create_time=? where username=?",data,(err,result,fields)=>{
        if(err)throw err;
        else{
        console.log("updated successfully")
        }
    })
    res.send("Put api is working")
})
app.listen(7000)