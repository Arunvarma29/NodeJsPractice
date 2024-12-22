const dbConnect = require('./mongoConnections');


const update =async () => {
    const db =await dbConnect();
    const result =await db.updateMany( // use updateOne for one ,to update all use updateMany
// first we choose one attribute then we use $set:{} to update that one attribute
       { name:"Mercedes" },{
        $set:{name:"Mercedes", year:"2002" , owner:"Diamler-AG", price:"3.6cr",
        type:"Vehicle", material: "metal", total: "10"}
       } 
    )
   if(result.acknowledged){
    console.log("Updated Successfully");
   } 
}
update();