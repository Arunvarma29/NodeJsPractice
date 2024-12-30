const express=require('express')
const EventEmitter=require('events');
const app=express();
const events=new EventEmitter();

let count=0;
events.on('CountApi',()=>{
    count++;
    console.log("Event called",count);
})

app.get('/',(req,res)=>{
    res.send("Event completed")
    events.emit('CountApi')
})
app.get('/search',(req,res)=>{
    res.send("Event completed")
    events.emit('CountApi')
})
app.get('/upload',(req,res)=>{
    res.send("Event completed")
    events.emit('CountApi')
})

app.listen(7000)