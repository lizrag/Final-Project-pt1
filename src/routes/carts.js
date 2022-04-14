import express from "express";
import Cartservice from "../services/cartService.js";
const cartRoutes = express.Router();

const cartService = new Cartservice();

// Create a cart and return cart id
cartRoutes.post('/carrito', (req, res) => {
    const cart = Cartservice.newCart();
    return res.send({ cartId: cart.id });
});

// Empty a cart and delete
cartRoutes.delete('/carrito/:id', (req, res) => {
    const cartId = req.params.id;
    CartService.deleteCartById(cartId);
    return res.send('Cart deleted successfully.');
});

// Get all associated products to a cart
cartRoutes.get('/carrito/:id/productos', (req, res) => {
    const cartId = req.params.id;
    const cartProducts = CartService.getProductsByCartId(cartId);
    return res.send(cartProducts);
});

// Add products to cart by product id
cartRoutes.post('/carrito/:id/productos', (req, res) => {
    const productId = req.body.productId;
    const cartId = req.params.id;
    CartService.addProductToCart(productId, cartId);
    return res.send('Product added successfully to cart.');
});

// Delete a product from a cart by product id and cart id
cartRoutes.delete('/carrito/:id/productos/:id_prod', (req, res) => {
    const productId = req.params.id_prod;
    const cartId = req.params.id;
    CartService.deleteProductFromCart(productId, cartId);
    return res.send('Product deleted successfully from cart.');
});

export default cartRoutes;