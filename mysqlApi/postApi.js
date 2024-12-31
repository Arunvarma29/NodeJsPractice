const mysql=require('mysql2')
const express=require('express');
const con = require('./config');

const app=express();
app.use(express.json())

app.post('/postapi',(req,res)=>{
    const data=req.body;
    con.query('Insert into user SET?',data,(err,result,fields)=>{
        if(err){
            res.send("Error")
            console.log(err);  
        }
        else{
            res.send(result)
            console.log('We got the result');
            
        }
    })
})

app.listen(7000)