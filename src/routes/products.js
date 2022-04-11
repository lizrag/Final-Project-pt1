import express from "express";
import idProductos from "../services/idproducts.js";
import adminMiddleware from "../middleware/admin.js";
import fileSystem from "../services/fileSystem.js";

const productosRouter = express.Router();

const productoService = new idProductos();


productosRouter.get('/', (req,res)=>{
    const products = productoService.getProductos();
    return res.send(products);
})

productosRouter.get('/:pid',(req,res)=>{
    const paramProductId = req.params.pid;
    if(paramProductId){
        const product = productoService.getId(paramProductId);
        return res.send(product);
    }
});

productosRouter.post('/', (req,res)=>{
    const product = req.body;
    console.log(product)
    const products = productoService.saveProductos(product);
    return res.send(products);
})

productosRouter.put('/:pid',adminMiddleware, (req,res)=>{
    const productId = req.params.id;
    const newProductData = req.body.product;
    const productUpdated = productoService.updateProduct(productId, newProductData);
    return res.send(productUpdated);
})

productosRouter.delete('/:pid', adminMiddleware,(req,res, next)=>{
    const productId = req.params.id;
    const products = productoService.deleteProduct(productId);

    return res.send(products);
})

export default productosRouter;