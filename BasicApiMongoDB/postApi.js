const dbConnect=require('./mongoConnections')
const express=require('express')
const app=express();

app.use(express.json())

app.post('/',async(req,res)=>{
    // console.log(req.body)
    let db= await dbConnect();
    let result= await db.insertMany(req.body)
    res.send(result)
})


app.listen(7000);