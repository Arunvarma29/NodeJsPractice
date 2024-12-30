const express=require('express')
const multer=require('multer')
const app=express()

const FileUpload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploads")
        },
        filename:function(req,file,cb){
            cb(null,this.filename+"-"+Date.now()+".jpg")
        }
    })
}).array("garbage");

app.post('/upload',FileUpload,(req,res)=>{
    res.send("File uploaded")
})

app.listen(7000)