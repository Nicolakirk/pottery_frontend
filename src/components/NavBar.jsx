import { Button , Container, Navbar, Modal} from 'react-bootstrap';
import  { useState, useContext } from 'react'
import { CartContext } from "../CartContext"

function NavBar (){

    const cart = useContext(CartContext);
  

    const [ show, setShow ] = useState(false);

    const handleClose =()=>{
    setShow(false);
    }
    const handleShow =()=>{
    setShow(true);
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
    {cart.items.map((currentProduct, idx) =>{
        <h1>{currentProduct.title}</h1>
    })}
    <h1> total {cart.getTotalCost()}</h1>
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