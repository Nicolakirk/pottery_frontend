import { useEffect, useState } from "react";
import { fetchProducts } from "../utils/api";
import ProductCard from "./ProductCard";
import { Row, Col } from 'react-bootstrap'


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
    <p align="center" className="p-3"> Welcome to the pottery store</p>
    <Row xs ={1} md={3} className="g-4">
            
        {productslist.map((product) =>{
            
            return (  
                 <ProductCard product={product} productsList={productslist} setProductsList={setProductsList}/>)
         
        }) }

    </Row>
    </div>
)
}


export default Productslist