const express=require('express')
const path = require('path')

const app=express();

app.set('view engine','ejs');

app.get('/Profile',(req,res)=>{

    const user={
        name:"Okuro",
        power:"Ghost transformation",
        skills: ['fast runner','calm','swim']
    }

    res.render( 'Profile',{user})
})

app.get('/login',(req,res)=>{
    res.render('login')
})

app.listen(5000)