const dbConnect=require('./mongoConnections')

const deleteData=async ()=>{
    const db=await dbConnect();
    const result=await db.deleteMany({name:"Mercedes"}) // to delete just provide any attribute ;to delete one use deleteOne(),to delete many use deleteMany()
    console.log(result);
    if(result.acknowledged){
        console.log("Deleted Successfully");
    }
}
deleteData();