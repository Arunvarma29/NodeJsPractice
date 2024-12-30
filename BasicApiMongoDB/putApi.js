const dbConnect=require('./mongoConnections')
const express=require('express')
const app=express();

app.use(express.json())

app.put('/:name',async(req,res)=>{
    let db=await dbConnect();
    let result= await db.updateOne(
        {name:req.params.name} // to update name using parameters to url  
        //{name:"Jaguar"}
        ,{$set:req.body}
    )
    res.send({result:"updated"})
})

app.listen(7000);