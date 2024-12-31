
const express=require('express');
const con = require('./config');

const app=express();
app.use(express.json())

app.delete('/:username',(req,res)=>{
    // instead of id i used username that is of type varchar that has given me an error
    //to solve this issue i just covered req.params.username in [] brackets 😁
    con.query('DELETE FROM user where username=?',[req.params.username],(err,result)=>{
        if(err)throw err;
        res.send(result)
        console.log("Deleted successfully");
        
    })

})

app.listen(7000)
