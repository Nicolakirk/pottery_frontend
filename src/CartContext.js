import { createContext, useSate } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { fetchProductsById } from "./utils/api";


const CartContext = createContext({
items:[],
getProductQuantity: () => {},
addOneToCart: () => {},
RemoveOneFromCart: () => {},
deleteFromCart: () => {},
getTotalCost: () => {},
});

export function  CartProvider({children}){
const [cartProducts, setCartProducts]= useSate([]);


    const contextValue ={
        items:[],
        getProductQuantity,
        addOneToCart,
RemoveOneFromCart,
deleteFromCart,
getTotalCost,
    }

    function getProductQuantity(id){
        fetchProductsById(id).then((product)=>{
            if (product.inventory=== undefined){
                return 0;
            }
            return product.inventory;
        }
        )
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
                    product.product_id === id
                    ? {... product,quantity:product.quantity +1}
                    : product
                )
            )
        }
    }
    return(
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )

    
}

