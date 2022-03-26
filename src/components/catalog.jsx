import "./catalog.css";
import Product from "./product";
import DataService from "../services/dataService";
import { useState, useEffect } from "react";

const Catalog = () => {
  let [products, setProducts] = useState([]);

  const loadCatalog = () => {
    console.log("Data retrieved");
    let service = new DataService();
    let data = service.getCatalog();
    setProducts(data);
  };

  useEffect(() => {
    loadCatalog();
  });

  return (
    <div className="catalog">
      <h3>Check our amazing catalog</h3>

      <div className="item-container">
        {products.map((prod) => (
          <Product key={prod._id} data={prod} />
        ))}
      </div>
    </div>
  );
};

export default Catalog;
