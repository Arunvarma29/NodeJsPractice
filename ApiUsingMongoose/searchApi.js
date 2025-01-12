const express=require('express')
require('./config')
const equip=require('./equip')

const app=express();
app.use(express.json())

app.get('/search/:key',async(req,res)=>{
    console.log(req.params.key);
    let data=await equip.find({
        "$or":[
            {"name":{$regex:req.params.key}},
            {"brand":{$regex:req.params.key}},
        ]
    }) 
    res.send(data) ;
})

app.listen(7000);