import { Router } from "express"
import Carts  from "../dao/dbManagers/carts.js";

const router = Router();
const cartManager = new Carts();

router.get('/',async(req,res)=>{
    let carts = await cartManager.getAll();
    res.send({status:'success',carts:carts})
})

router.post('/',async(req,res)=>{
    const {products} = req.body;
    let cart = {}

    if (products)
        cart.products = products

    let result =await cartManager.addCart(cart)
    res.send({status:'success',cart:result})
})

router.get('/:id', async(req, res)=>{
    let cartId = req.params.id;
    let cart = await cartManager.getCartById(cartId);
    if (cart)
        res.send({status:'success',cart:cart})
    else
        res.send({status:'error','error_description':`carrito con Id ${cartId} no fue encontrado.`})
})

router.put('/:id', async(req, res)=>{
    let cartId = req.params.id;
    let cart = await cartManager.getCartById(cartId);
    if (cart){
        let cartBody = req.body;
        let cartEdit = await cartManager.updateCartById(cartId, cartBody);
        res.send({status:'success',cart:cartEdit})
    }
    else
        res.send({status:'error','error_description':`carrito con Id ${cartId} no fue encontrado.`})
})

export default router;