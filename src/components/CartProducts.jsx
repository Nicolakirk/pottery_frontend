import Button from "react-bootstrap/Button";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function CartProduct({ currentProduct, productArray, getProductData }) {
  const id = currentProduct.id;
  const quantity = currentProduct.quantity;
  const cart = useContext(CartContext);
  const productData = getProductData(id);

  return (
    <>
      <h3> {productData.title}</h3>

      <p> Quantity: {quantity}</p>
      <p>£{(quantity * productData.price).toFixed(2)} </p>
      <Button
        size="sm"
        variant="warning"
        onClick={() => cart.deleteFromCart(id)}
      >
        Remove
      </Button>
      <br></br>
    </>
  );
}

export default CartProduct;
