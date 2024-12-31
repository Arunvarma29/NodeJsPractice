const mysql=require('mysql2')
const express=require('express');
const con = require('./config');

const app=express();

app.get('/go',(req,res)=>{
    con.query('select * from user',(err,result)=>{
        if(err){
            res.send("Error occured")   
        }
        else{
            res.send(result)
            console.log("Data displayed successful");
        }
    })
})

app.listen(7000);