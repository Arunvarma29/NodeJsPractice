const mysql = require('mysql2')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql49',
    database: 'animal'
})
con.connect((err) => {
    if (err) {
        console.log('err', err);
    } else {
        console.log("Connected");
    }
})

con.query('select * from user',(err,result)=>{
   if(err){
    console.log(err);
   } 
   else{
    console.log(result); 
   }
})