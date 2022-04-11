import express from 'express';
import cartRoutes from './routes/carts.js';
import productosRouter from './routes/products.js';

const app = express();

const server = app.listen(8080,()=>console.log(`Listening on 8080`))

app.use(express.json())
app.use('/api/productos', productosRouter);
app.use('/api/carrito', cartRoutes);