import processFile from './fileSystem.js';

export default class idProductos{
    constructor(){
        this.products = [];
    }


    getProductos= () =>{
        return this.products;
    }

    getId= (id) =>{
        const productStored= this.products.findIndex(p=> p.id == id);
        return this.products[productStored];
    }

     
    saveProductos = (producto) =>{
        let productID = {
            id: this.products.length+1,
            timestamp: Date.now(),
            nombre: producto.nombre, 
            descripcion: producto.descripcion,
            codigo: producto.codigo,
            foto: producto.foto,
            precio: producto.precio,
            stock: producto.stock
        }
        this.products.push(productID);
        return processFile(productID);
    }

    updateProduct = (id,product) =>{
        const productStored = this.products.findIndex(p=> p.id==id);
        const productUpdated = this.products[productStored];
        productUpdated.timestamp = Date.now();
        productUpdated.nombre= product.nombre;
        productUpdated.descripcion= product.descripcion;
        productUpdated.codigo= product.codigo;
        productUpdated.foto = product.foto;
        productUpdated.precio = product.precio;
        productUpdated.stock= product.stock;
        this.products[productStored]= productUpdated;

        return this.products[productStored];
    }

    deleteProduct = (id) =>{
        const productStored = this.products.findIndex(p=>p.id== id);
        if (productStored > -1){
            this.products.splice(productStored,1);
        }
        return this.products;
    }

}

