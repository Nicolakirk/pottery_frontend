import { Button , Container, Navbar, Modal} from 'react-bootstrap';
import  { useState, useContext, useEffect } from 'react'
import { CartContext } from "../CartContext"
import { fetchProducts } from '../utils/api';
import CartProduct from './CartProducts';

function NavBar (){

    const cart = useContext(CartContext);
console.log(cart.items)
    const [productArray, setProductArray] = useState([]);

    useEffect(() =>{
       
        fetchProducts().then((products)=>{
           
            setProductArray(products)
           
        })
    
    },[])

    function getProductData(id) {
        
        let newProductData = productArray.find(product => product.product_id === id)

    
        return newProductData;
    
    }
    function getTotalCost(){
        
        let totalCost = 0

        cart.items.map((cartItem )=> { 
           let newProduct =   getProductData(cartItem.id)
          
            totalCost += (newProduct.price * cartItem.quantity)
            
        })
       
        return totalCost;
     };
       
 


    const [ show, setShow ] = useState(false);


    const handleClose =()=>{
    setShow(false);
    }
    const handleShow =()=>{
    setShow(true);
    }

    const startCheckout = async () =>{
await fetch('http://localhost:4000/checkout',{
    method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify({items: cart.items})
}).then((response) => {
    return response.json();
}).then((response) => {
    if( response.url){
        window.location.assign(response.url)
    }
}
)
    }

    const productsCount = cart.items.reduce((sum, product)=> sum + product.quantity, 0);
    

return(
    <>
    <Navbar expand ="sm">
    <Navbar.Brand href="/"> Pottery Store</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className='justify-content-end'>
    <Button onClick={handleShow}>Cart {productsCount} Items</Button>
       
    </Navbar.Collapse>
    </Navbar>
    <Modal show={show} onHide={handleClose}>
<Modal.Header closeButton></Modal.Header>
<Modal.Body>
    {productsCount > 0?
    <>
    <p>Items in your cart:</p>
    {cart.items.map((currentProduct, idx) => (
      
      <CartProduct productArray={productArray}  getProductData={getProductData} currentProduct={currentProduct} />
    ))}

    <h1> total: £{getTotalCost().toFixed(2)} </h1>
    <Button variant="success" onClick={startCheckout}>
        Purchase Items!
    </Button>
    </>
    :
        <h1>There are no items in your cart</h1>
    }
   
</Modal.Body>
    </Modal>
    </>
)
}

export default NavBar