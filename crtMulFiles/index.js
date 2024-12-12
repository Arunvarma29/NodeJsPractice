const fs=require('fs');
const path =require('path');

const dirpath=path.join(__dirname,'files')

// for(i=0;i<5;i++){
//     fs.writeFileSync(dirpath+"/Hello"+i+".txt","This program create multiple files at onces in a folder")
// }

fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log("File name is :",item);
        
    })
})