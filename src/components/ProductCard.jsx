import { Link } from "react-router-dom"


const ProductCard = ({product, setProductsList, productsList})=>{

    return (
       <section key = {product.product_id}>
        <h4>{product.title}</h4>
        <img src = {product.article_img_url} alt={product.product_title}
    width={300}
    height={250} ></img>
        
<p>{product.body}</p>
<p>£{product.price}</p>
       </section>
    )
};

export default ProductCard;