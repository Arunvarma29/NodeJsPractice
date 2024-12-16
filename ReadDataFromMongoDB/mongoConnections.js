const {MongoClient}=require('mongodb');
// const MongoClient=require('mongodb').MongoClient;   both are same thing

const url='mongodb://localhost:27017/'
const database='e-comm'
const client=new MongoClient(url);

async function dbConnection(){
    let result=await client.connect();
    let db=result.db(database);
    return db.collection('products');
    // let response=await collection.find({}).toArray();
    // console.log(response)

}

module.exports= dbConnection;