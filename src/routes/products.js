import express from "express";
import idProductos from "../products/idproducts.js";

const router = express.Router();

const productoService = new idProductos();

router.get('/', (req,res)=>{
    if (productoService.productos.length == 0) res.send({ error: "no hay productos cargados" })
    res.send(productoService.productos);
})

router.get('/:pid',(req,res)=>{
    let id = parseInt(req.params.id);
    if(id < 0) return res.send({ error: "producto no encontrado" })
    res.send(productoService.productos[id])
})

router.post('/', (req,res)=>{
    let {id,timestamp,nombre,descripcion,codigo,foto,precio,stock} = req.body;
    let producto = productoService.saveProductos({id,timestamp,nombre,descripcion,codigo,foto,precio,stock});
    res.send({message:"Added product", product: producto})
})

router.put('/:pid', (req,res)=>{
    let {id} = req.params;
    let {nombre} = req.body;
    let productosPut = productoService.getProductos.find (p=> p.id == id);
    productosPut.nombre = nombre;
    return res.json(productosPut);
})

router.delete('/:pid', (req,res, next)=>{
    let id= req.params.id;
    Producto.delete (id, (err)=>{
        if (err) return next (err);
        res.send({message: 'Deleted'});
    })
})

export default router;