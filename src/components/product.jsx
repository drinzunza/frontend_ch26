import "./product.css";
import QuantityPicker from "./quantityPicker";
import { useState } from "react";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);

  const onQuantityChange = (value) => {
    console.log("Quantity has changed to: ", value);
    setQuantity(value);
  };

  const getTotal = () => {
    let total = quantity * props.data.price;
    return "$" + total.toFixed(2);
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
        <button className="btn btn-sm btn-info btn-add">Add</button>
      </div>
    </div>
  );
};

export default Product;
