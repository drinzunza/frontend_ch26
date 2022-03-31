import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState, useContext } from "react";
import store from "./../context/storeContext";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const addProdToCart = useContext(store).addProdToCart;

  const onQuantityChange = (value) => {
    console.log("Quantity has changed to: ", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
  };

  const addProduct = () => {
    // create an obj
    let cartProd = { ...props.data };
    cartProd.quantity = quantity;

    addProdToCart(cartProd);
  };

  return (
    <div className="product">
      <img src={"/imgs/" + props.data.image} alt="product img"></img>
      <h4> {props.data.title} </h4>

      <div className="price-info">
        <label className="total"> Total: {getTotal()}</label>
        <label className="price"> Price: ${props.data.price} </label>
      </div>

      <div className="controls">
        <QuantityPicker onChange={onQuantityChange}></QuantityPicker>
        <button onClick={addProduct} className="btn btn-sm btn-info btn-add">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
