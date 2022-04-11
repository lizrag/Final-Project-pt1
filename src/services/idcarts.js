import idProductos from "./idproducts.js";  

export default class Cartservice {
    constructor() {
        this.carts = []
    }

    newCart = () => {
        const newCart = {
            id: this.carts.length + 1,
            timestamp: Date.now(),
            products: []
        }

        this.carts.push(newCart);
        return newCart;
    }

    deleteCartById = (id) => {
        const cartStoredIndex = this.carts.findIndex(cart => cart.id == id);
        
        if (cartStoredIndex > -1) {
            this.carts.splice(cartStoredIndex, 1);
        }
    }

    getProductsByCartId = (id) => {
        const cart = this.carts.find(cart => cart.id == id);
        return cart.products;
    }

    addProductToCart = (productId, cartId) => {
        const product = idProductos.getId(productId);
        const cart = this.carts.find(cart => cart.id == cartId);
        cart.products.push(product);
    }

    deleteProductFromCart = (productId, cartId) => {
        const cart = this.carts.find(cart => cart.id == cartId);
        const productIndex = cart.products.findIndex(product => product.id == productId);
        cart.products.splice(productIndex, 1);
    }
}

