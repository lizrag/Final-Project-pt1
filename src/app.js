import express from 'express';
import productosRouter from './routes/products.js';

const app = express();

const server = app.listen(8080,()=>console.log(`Listening on 8080`))


app.use('/api/productos', productosRouter);