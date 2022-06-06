const mongoose =  require("mongoose");


const productSchema = new mongoose.Schema(
    {
        name:{type:String, required:true},
        Tag:{type:String, required:true},
        price:{type:Number, required:true},
        stprice:{type:Number, required:true},
        nos:{type:Number, required:true},
        mkt:{type:String, required:true},
        brand:{type:String, required:true},
        cat:{type:String, required:true},
        main:{type:String, required:true},
        img:{type:String, required:true},

    },
    {
        versionKey:false,
        timestamps:true
    }
);

const Product = mongoose.model("product",productSchema);

module.exports = Product