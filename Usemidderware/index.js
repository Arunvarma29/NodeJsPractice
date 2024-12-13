const express=require('express')

const app=express()

const reqFilter=(req,res,next)=>{
    if(!req.query.age){
        res.send("Please provide age")
    }else if(req.query.age<18){
        res.send("You can't access this page ")
    }else{
        next();
    }
    
}

app.use(reqFilter)

app.get("/",(req,res)=>{

    res.send("Kya bolti public")
})

app.get("/user",(req,res)=>{

    res.send("chai lao ")
})

app.listen(4000)

// In this we have learned about middleware 