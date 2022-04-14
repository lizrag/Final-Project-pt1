import fs from 'fs';
import __dirname from '../utils.js'

export default class ProductService {

    // products;

    constructor(){
        this.products = [];
    }

    getProductos= async () =>{
        const data = await fs.promises.readFile(`${__dirname}/products.txt`, 'utf8');
        return data;
    }

    getId= (id) =>{
        const productStored= this.products.findIndex(p=> p.id == id);
        return this.products[productStored];
    }

     
    saveProductos = async (producto) =>{

        let product = {
            id: producto.id,
            timestamp: Date.now(),
            nombre: producto.nombre, 
            descripcion: producto.descripcion,
            codigo: producto.codigo,
            foto: producto.foto,
            precio: producto.precio,
            stock: producto.stock
        }
        
        await fs.promises.writeFile(`${__dirname}/products.txt`, JSON.stringify(product));
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

