const express=require("express")
const app=express();

app.get("",(req,res)=>{
    res.send("Hello guys")
})
app.get("/about",(req,res)=>{
    res.send("Hello guys, this is our about page")
})
app.get("/help",(req,res)=>{
    res.send("Hello guys !! :( meri meri madat karo")
})

app.listen(5000)
