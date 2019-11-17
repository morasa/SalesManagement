import mongoose from "mongoose";
const productdetails_schema = new mongoose.Schema({
    product_code :{
        type:String
    },
    product_name:{
        type:String
    },
    product_category:{
        type:String
    },
    product_manufacture :{
        type:String
    },
    product_status:{
        type:String
    },
    createdate :{
        type:Date,
        default:Date.now()
    }
})
export const detailsmodel = mongoose.model("products",productdetails_schema);