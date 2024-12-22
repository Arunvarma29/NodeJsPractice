const dbConnect = require('./mongoConnections');


const insert =async () => {
    const db =await dbConnect();
    const result =await db.insertMany(   // for inserting many data using array
        [
        {
            name: "Jaguar",
            year: "1935",
            owner: "Tata motors",
            price: "72.90L"
        },
        {
            name: "Tata steel",
            year: "1907",
            owner: "Tata Group",
            price: "one trillion"
        },
        {
            name: "mustang",
            year: "2023",
            owner: "Ford",
            price: "74.61L"
        },
        ]
    )
    if(result.acknowledged){
        console.log("Data Inserted Successfully");
    }
   
}
insert();
