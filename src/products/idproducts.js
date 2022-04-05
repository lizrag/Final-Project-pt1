export default class idProductos{
    constructor(){
        this.productos = [];
    }


    getProductos= () =>{
        return this.productos;
    }

     
    saveProductos = (producto) =>{
        let productID = {
            id: this.productos.length+1,
            timestamp: producto.timestamp,
            nombre: producto.nombre,
            descripcion: producto.descripcion,
            codigo: producto.codigo,
            foto: producto.foto,
            precio: producto.precio,
            stock: producto.stock
        }
        this.productos.push(productID);
        return productID;
    }
}