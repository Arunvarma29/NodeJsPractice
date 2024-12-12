const fs =require('fs');
const path = require('path');
const dirpath=path.join(__dirname,'curd');
const filepath=`${dirpath}/dandadan.txt`;

// fs.writeFileSync(filepath,"New file has been created");
// fs.readFile(filepath,'utf-8',(err,item)=>{
//     console.log(item);
// })

// fs.appendFile(filepath," I appended new data in this file",(err)=>{
//     if(!err) console.log("File appended successfully");
// })

// fs.rename(filepath,`${dirpath}/okuro.txt`,(err)=>{
//     if(!err) console.log("successfully renamed file"); 
// })

fs.unlinkSync(`${dirpath}/dandadan.txt`)



