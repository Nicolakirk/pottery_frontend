import { Button , Container, Navbar, Modal, NavLink, Nav} from 'react-bootstrap';
import  { useState, useContext, useEffect } from 'react'
import { CartContext } from "../CartContext"
import { fetchProducts } from '../utils/api';
import CartProduct from './CartProducts';
import { Link } from 'react-router-dom';

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
    <Navbar expand ="sm"  bg="light" data-bs-theme="light" >
    <Navbar.Brand href="/"> SAM MCLEOD</Navbar.Brand>
    <Navbar.Toggle/>
    <Navbar.Collapse className='justify-content-end'>
    <Nav.Link href="/"className='p-1' >Welcome</Nav.Link>
    <Nav.Link href="/about" className='p-1'>About</Nav.Link>
    <Nav.Link href="/store" className='p-1'>Store</Nav.Link>
        
    <Button onClick={handleShow} variant="outline-dark">Cart {productsCount} Items</Button>
       
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
    <Button variant="dark" onClick={startCheckout}>
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