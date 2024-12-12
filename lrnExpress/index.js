const express = require("express")
const app = express();

// app.get("",(req,res)=>{
//     console.log("data sent by brower =>>>",req.query.name);
//     res.send("Hello guys I am " +req.query.name)
// })
// app.get("/about",(req,res)=>{
//     res.send("Hello guys, this is our about page")
// })
// app.get("/help",(req,res)=>{
//     res.send("Hello guys !! :( meri meri madat karo")
// })

// app.listen(5000)

// from here on we start how to load html and json in it

app.get("/", (req, res) => {
    console.log("data sent by brower =>>>");
    res.send(`"<h1>Hello guys I am </h1>"
        <a href="/about">Go To About Page</a>  
        <a href="/help">Go To Help Page</a>   ` )
})
app.get("/about", (req, res) => {
    res.send(`<input type="text" placeholder="Enter any text" value=${req.query.name} /> 
          <button type="Submit" >Click me </button>
          <a href="/help">Go To Help Page</a>
          <a href="/">Go To Home Page</a> `)
})
app.get("/help", (req, res) => {
    res.send({
        name:'Arun' ,
        email:'xyz@gmail.com',
        } )
})
  
// we can't pass json value and html tags at same time

app.listen(5000)
