import fs from 'fs';
import idProductos from './idproducts.js';
import productosRouter from '../routes/products.js';

const processFile = () =>{
    try{
        let data= fs.promises.readFile('productoService.getProductos', 'utf-8')
        console.log(data);
        let content= JSON.parse(data);
        fs.promises.writeFile('services/products.txt', content,'utf-8')
    }catch(error){
        console.log("cant process file"+error)
    } 
}



export default processFile();