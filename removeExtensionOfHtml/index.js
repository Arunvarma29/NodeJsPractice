const express=require('express')
const path = require('path')

const app=express();
const publicPath=path.join(__dirname,'public')

app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/home.html`)
})
app.get('/about',(req,res)=>{
    res.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(req,res)=>{
    res.sendFile(`${publicPath}/help.html`)
})

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/notfound.html`)
})

app.listen(5000)

