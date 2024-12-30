const express=require('express');
require('./config');
const equip=require('./equip');

const app=express();
app.use(express.json())

app.post("/create",async(req,res)=>{
    let data=new equip(req.body);
    let result=await data.save();
    console.log(result);
    res.send("Done")
});

app.listen(7000)

