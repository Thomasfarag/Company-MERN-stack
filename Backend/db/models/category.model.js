import { Schema, model } from "mongoose";

const categorySchema = new Schema({
    categoryName:{
        type:String,
        required:true,
    },
    categoryService:{
        type:String,
        required:true
    }
})

export const categoryModel = model("Category", categorySchema );
