import { Link } from "react-router-dom"
import { Card, Button, Form, Row, Col } from 'react-bootstrap'
import { CartContext } from '../CartContext'
import { useContext } from "react";

const ProductCard = ({product, setProductsList, productsList})=>{
 const cart = useContext(CartContext);

const productQuantity = cart.getProductQuantity(product.product_id)


    return (
        <Col align="center">
       <Card align="center" key = {product.product_id}>
        <Card.Body>
            <Card.Title>  <h4>{product.title}</h4> </Card.Title>
     
        <img src = {product.article_img_url} alt={product.product_title}
    class="img-thumbnail"  ></img>

    <Card.Text>£{product.price}</Card.Text> 
    { productQuantity > 0 ?
    <>
    <Form as={Row}>
        <Form.Label coluumn="true" sm="6">In cart: {productQuantity}</Form.Label>
        <Col sm="6">
            <Button sm="6" onClick={()=>cart.addOneToCart(product.product_id)} className="mx-2">+</Button>
            <Button sm="6" onClick={()=>cart.removeOneFromCart(product.product_id)}className="mx-2">-</Button>
        </Col>
    </Form>
    <Button variant="danger" onClick={()=> cart.deleteFromCart(product.product_id)} className="my-2"> Remove From Cart</Button>
    </>
  
:
<Button variant="primary" onClick={()=> cart.addOneToCart(product.product_id)}> Add To Cart</Button>
}
</Card.Body>
       </Card>
       </Col>
    )
};

export default ProductCard;