import "./quantityPicker.css";
import { useState } from "react";

const QuantityPicker = (props) => {
  //let quantity = 1;
  let [quantity, setQuantity] = useState(1);

  const handleDecrease = () => {
    let value = quantity;
    if (value > 1) value = value - 1;

    setQuantity(value); //it takes some time to render
    props.onChange(value);
  };

  const handleIncrease = () => {
    let value = quantity + 1;
    setQuantity(value); //it takes some time to render
    props.onChange(value);
  };

  return (
    <div className="quantityPicker">
      <button className="btn btn-sm btn-dark" onClick={handleDecrease}>
        -
      </button>
      <label> {quantity} </label>
      <button className="btn btn-sm btn-dark" onClick={handleIncrease}>
        +
      </button>
    </div>
  );
};

export default QuantityPicker;
