import cartsModel from "../models/carts.js";

export default class Carts{

    constructor(){
        console.log("Estamos trabajando en db mongo");
    }

    getAll=async()=>{
        let carts = await cartsModel.find().lean();
        return carts
    }

    addCart = async cart=> {
        cart.id = await this.getIdCart();
        let result = await cartsModel.create(cart)
        return result
    }

    getIdCart = async() =>{
        let endCart = await cartsModel.findOne().sort([['id', 'desc']]);
        if (endCart)
            return endCart.id+1;
        return 1;
    }

    getCartById = async(id) =>{
        let cart = await cartsModel.findOne({'id': id});
        return cart;
    }

    updateCartById = async(id, cart)=> {
        let result = await cartsModel.findOneAndUpdate({id:id},cart)
        return result
    }
}