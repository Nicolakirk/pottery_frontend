import { Link } from "react-router-dom"
import { Card, Button, Form, Row, Col } from 'react-bootstrap'

const ProductCard = ({product, setProductsList, productsList})=>{

    return (
        <Col align="center">
       <Card align="center" key = {product.product_id}>
        <Card.Body>
            <Card.Title>  <h4>{product.title}</h4> </Card.Title>
     
        <img src = {product.article_img_url} alt={product.product_title}
    width={250}
    height={250} ></img>
          <Card.Text>{product.body}</Card.Text> 

<Card.Text>£{product.price}</Card.Text> 
<Button variant="primary"> Add To Cart</Button>
</Card.Body>
       </Card>
       </Col>
    )
};

export default ProductCard;