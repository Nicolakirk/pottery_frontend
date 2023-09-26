import { Link } from "react-router-dom"
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from "react";

const ProductCard = ({product, setProductsList, productsList})=>{
 const cart = useContext(CartContext);


    return (
        <Col align="center">
       <Card align="center" key = {product.product_id}>
        <Card.Body>
            <Card.Title>  <h4>{product.title}</h4> </Card.Title>
     
        <img src = {product.article_img_url} alt={product.product_title}
    width={250}
    height={250} ></img>

<Card.Text>£{product.price}</Card.Text> 
<Button variant="primary"> Add To Cart</Button>
</Card.Body>
       </Card>
       </Col>
    )
};

export default ProductCard;