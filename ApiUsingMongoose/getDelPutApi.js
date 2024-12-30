const express=require('express');
require('./config');
const equip=require('./equip');

const app=express();
app.use(express.json())

app.get('/list',async(req,res)=>{
    let data=await equip.find()
    res.send(data); 
})

app.delete('/delete/:_id',async(req,res)=>{
 let data= await equip.deleteOne(req.params);
 res.send(data)
})

app.put('/update/:_id',async(req,res)=>{
 let data= await equip.updateOne(
    //consdition{}
    req.params,
    {
        // set updated data
        $set:req.body
    }
 );
 res.send(data)
})

app.listen(7000)