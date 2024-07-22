import Product from "../models/product.js";
import makeNetworkCall from "./api-client.js";

const productOperations = {
    products:[],
    search(pizzaId){
        const product = this.products.
        find(currentProduct=>currentProduct.id==pizzaId);
        console.log('Product Found', product);
        product.isAddedInCart=true;
        console.log('Array',this.products);
    },
  
     getProductsInCart(){
        const productInBasket=this.products.filter(product=>product.isAddedInCart);
        return productInBasket;
     },

    async loadProducts(){
        const pizzas= await makeNetworkCall();
        const pizzaArray=  pizzas['Vegetarian'];
        const productsArray= pizzaArray.map(pizza=>{
            const currentPizza = new Product(pizza.id, pizza.name,
                pizza.menu_description, pizza.price, pizza.assets.product_details_page[0].url);
                return currentPizza;
        })
        

        this.products=productsArray;
        console.log(this.products)
        console.log('Product Array ', productsArray);
        return productsArray;
    },
    
    getTotalPrice(){
        const productsInCart = this.getProductsInCart();
        return productsInCart.reduce((total, product) => total + product.price, 0);
    }
}
export default productOperations;