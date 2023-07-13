import mongoose from "mongoose";

const productsCollection = 'products'
const productSchema = mongoose.Schema({

    id: {
        type: Number,
        required : true,
        index: true
    },
    title:{
        type: String,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    code:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    status:{
        type: Boolean,
        default: true,
        required : true
    },
    stock:{
        type: Number,
        required : true
    },
    category:{
        type: String,
        required : true
    },
    thumbnails: {
        type: Array,
        default: []
    }
})

const productsModel =  mongoose.model(productsCollection, productSchema)
export default productsModel;