// console.log(process.argv);
// node ./FileSystem hey! how are you?
// output:[
 /* 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\my code\\sigma web development\\nodejs\\NodeBegin\\creating1stAPI\\FileSystem',
  'hey',
  'ss',
  'how',
  'are',
  'you?'
]
*/
// console.log(process.argv[4]);
//node FileSystem.js how can i help you?
// output:i

const { log } = require('console')
const fs=require('fs')
const input=process.argv  // with this I can take commands from command line
// fs.writeFileSync(input[2],input[3]) // file is created with this command

if(input[2]=='add'){
    fs.writeFileSync(input[3],input[4])

}else if(input[2]=='remove'){
    fs.unlinkSync(input[3])  // this command will remove targeted file

}else{
    console.log("Invalid credential");
    
}
