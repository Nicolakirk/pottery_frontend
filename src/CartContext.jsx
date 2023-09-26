import { createContext, useState } from "react";

import { fetchProducts, fetchProductsById } from "./utils/api";


export const CartContext = createContext({
items: [],
getProductQuantity: () => {},
addOneToCart: () => {},
removeOneFromCart: () => {},
deleteFromCart: () => {},
getTotalCost: () => {},

});

export function CartProvider({children}){

const [cartProducts, setCartProducts]= useState([]);
const[productArray, setProductArray ]= useState([]);
const[productById, setProductById] = useState({});

   

    function getProducts(){
        fetchProducts().then((products)=>{
            return products;
        })
    }

    function getProductsById(id){
        console.log(id)
        fetchProductsById(id).then((product)=>{
        
          return product;
        })
    };

    function getProductData(id) {
        fetchProducts().then((products)=>{
           
    
            let newProductData = products.find(product => product.product_id === id)
      
           
            return newProductData;
        })
       
        
    }

    function getProductQuantity(id){
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if ( quantity === undefined ){
            return 0
        }
        return quantity;
    }

    function addOneToCart(id){
        const quantity = getProductQuantity(id);
        if(quantity === 0){
            setCartProducts([
                ...cartProducts,
                {
                    id:id, 
                    quantity:1
                }
            ])
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product,quantity:product.quantity +1}
                    : product
                )
            )
        }
    };
    function removeOneFromCart(id){
        const quantity = getProductQuantity(id)
        if(quantity === 1){
            deleteFromCart(id);
        }else{
            setCartProducts(
                cartProducts.map(
                    product =>
                    product.id === id
                    ? {...product,quantity:product.quantity -1}
                    : product
                )
            )
        }
    };

    function deleteFromCart(id){
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct =>{
                return currentProduct.id !== id;
            })
        )
    };

     
    function getTotalCost(){
        let totalCost = 0;
        console.log(cartProducts)
        cartProducts.map((cartItem)=>{ 
            const productData = getProductData(cartItem.id)
            totalCost += (productData.price * cartItem.quantity)
            console.log(productData)
        })
        return totalCost;
     };

     const contextValue ={
        items:cartProducts,
        getProductQuantity,
        addOneToCart,
removeOneFromCart,
deleteFromCart,
getTotalCost,
    }

    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

    
}
 export default CartProvider;
