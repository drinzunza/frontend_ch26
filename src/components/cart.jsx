import "./cart.css";
import { useContext } from "react";
import store from "../context/storeContext";
import ProductInCart from "./productInCart";

const Cart = () => {
  // get two or more elements from the store test change
  let { cart, addProdToCart } = useContext(store);

  return (
    <div className="cart-page">
      <h3>Let's finish the order!!!</h3>
      <h5>Are you ready to pay for the {cart.length} items in cart.</h5>

      <div className="products">
        {cart.map((prod) => (
          <ProductInCart key={prod._id} data={prod}></ProductInCart>
        ))}
      </div>
    </div>
  );
};

export default Cart;
