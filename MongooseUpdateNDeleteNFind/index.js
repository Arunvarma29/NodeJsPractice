const mongoose=require('mongoose');

     mongoose.connect('mongodb://localhost:27017/sports');

     const ProductSchema= new mongoose.Schema({
        name:String,
        year:Number,
        categoriesss:String,
    });

    const saveInDB=async()=>{

    const ProductModel= mongoose.model('sequipments',ProductSchema);
    let data=new ProductModel({name:"VolleyBall",year:1895,categoriesss:"Indoor"});
    let result=await data.save();
    console.log(result);
    
    }

    const updateInDB=async()=>{
        const ProductModel= mongoose.model('sequipments',ProductSchema);
        let data=await ProductModel.updateOne(
            {name:"VolleyBall"},
            {
                $set:{year:1990}
            }
        )
        console.log(data); 
    }

    const deleteInDB=async()=>{
        const Product =mongoose.model('sequipments',ProductSchema);
        let data=await Product.deleteOne({year:1895});
        console.log(data);
        
    }

    const findInDB=async ()=>{
        const Product =mongoose.model('sequipments',ProductSchema);
        let data=await Product.find({year:1990});
        console.log(data);
    }

    // saveInDB()
    // deleteInDB()
    // updateInDB()
    findInDB();


