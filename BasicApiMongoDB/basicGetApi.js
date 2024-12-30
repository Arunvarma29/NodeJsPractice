const dbConnect=require('./mongoConnections')
const express=require('express')
const app=express();

app.get('/',async(req,res)=>{
    let db= await dbConnect();
     db= await db.find().toArray();
    res.send(db);
})

app.listen(7000);