// here we sre going to learn route level middleware  in which we can use middleware in single route

const express = require('express')
const reqFilter=require('./middleware')
const app = express()
const routemw=express.Router();


routemw.use(reqFilter)


//app.use(requireFilter)  // this line will apply middleware on all the routers


app.get('/login',routemw, (req, res) => {
    res.send("Aaao welcome")
})

app.get('/about', (req, res) => {
    res.send("ye hai hamara about page")
})

app.get('/contact', (req, res) => {
    res.send("ye hai hamara Contact page")
})

app.get('/help', (req, res) => {
    res.send("ye hai hamara help page")
})

app.listen(3000)