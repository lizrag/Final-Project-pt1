import express from "express";
import ProductService from "../services/productService.js";
import adminMiddleware from "../middleware/admin.js";
// import fileSystem from "../services/fileSystem.js";

const productosRouter = express.Router();

const productoService = new ProductService();


productosRouter.get('/', async (req, res)=>{
    const products = await productoService.getProductos();
    return res.send(products);
})

productosRouter.get('/:pid',(req,res)=>{
    const paramProductId = req.params.pid;
    if(paramProductId){
        const product = productoService.getId(paramProductId);
        return res.send(product);
    }
});

productosRouter.post('/', async (req, res)=>{
    const product = req.body;
    await productoService.saveProductos(product);
    return res.send('Producto guardado');
});

productosRouter.put('/:pid',adminMiddleware, (req,res)=>{
    const productId = req.params.id;
    const newProductData = req.body.product;
    const productUpdated = productoService.updateProduct(productId, newProductData);
    return res.send(productUpdated);
});

productosRouter.delete('/:pid', adminMiddleware,(req,res, next)=>{
    const productId = req.params.id;
    const products = productoService.deleteProduct(productId);

    return res.send(products);
});

export default productosRouter;