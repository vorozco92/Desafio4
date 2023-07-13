import productsModel from "../models/products.js";

export default class Products{

    constructor(){
        console.log("Estamos trabajando en db mongo");
    }

    getAll=async()=>{
        let products = await productsModel.find().lean();
        return products
    }

    saveProducts = async product=> {
        let result = await productsModel.create(product)
        return result
    }

    getIdProduct = async() =>{
        let endProd = await productsModel.findOne().sort([['id', 'desc']]);
        if (endProd)
            return endProd.id+1;
        return 1;
    }

    getProductById = async(id) =>{
        let product = await productsModel.findOne({'id': id});
        return product;
    }

    updateProductById = async(id, product)=> {
        let result = await productsModel.findOneAndUpdate({id:id},product)
        return result
    }

    deleteProductById = (id)=> {
        let result = productsModel.findOneAndDelete({id:id})
        return result
    }
}