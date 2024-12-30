const mongoose = require('mongoose')

const main = async () => {
    await mongoose.connect("mongodb://localhost:27017/sports");
    const ProductSchema = new mongoose.Schema({
        name: String,
        price: Number,
        category: String,
    });


    const ProductModel = mongoose.model('sequipments', ProductSchema);
    let data = new ProductModel({ name: "redmi", price: 10000 ,category:"mobile"})
    let result = await data.save();
    console.log(result);

}
main();