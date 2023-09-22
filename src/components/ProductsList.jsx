import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import ProductCard from "./ProductCard";


const Productslist = ()=>{
const[isLoading, setIsLoading] = useState("");
const[productslist, setProductsList]
= useState([])

useEffect(() =>{
    setIsLoading(true);
    fetchProducts().then((products)=>{
       
        setProductsList(products)
        setIsLoading(false)
    })

},[])
    if(isLoading){
        return <p> Is loading ... </p>
    }
return (
    <div>
    <p> Welcome to the pottery store</p>
    <ul>
        {productslist.map((product) =>{
            return ( <ProductCard product={product} productsList={productslist} setProductsList={setProductsList}/>)

        })
        
        
        }

    </ul>
    </div>
)
}


export default Productslist