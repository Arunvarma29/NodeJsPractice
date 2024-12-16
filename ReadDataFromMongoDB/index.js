const dbConnection=require('./mongoConnections')

// dbConnection().then((res)=>{
//     // res.find({type:"texttile"}).toArray().then((data)=>{  //for specific data from mongodb
//     res.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })


const main= async()=>{
let data=await dbConnection();
data=await data.find().toArray();
console.log(data);
}

main();

