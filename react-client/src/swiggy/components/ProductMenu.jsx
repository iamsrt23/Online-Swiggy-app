import React, { useState, useEffect } from "react";
import { API_PATH } from "../api";
import { useParams } from "react-router-dom";
import TopBar from "./TopBar";

const ProductMenu = () => {
  const [products, setProducts] = useState([]);

  const { firmId, firmName } = useParams();

  const productHandler = async () => {
    try {
      const response = await fetch(`${API_PATH}product/${firmId}/products`);
      const newProductData = await response.json();
      setProducts(newProductData.products);
    } catch (error) {
      console.error("Product failed to Fetch", error);
    }
  };

  useEffect(() => {
    productHandler();
  }, []);

  return (
    <>
      <TopBar />
      <section className="productSection">
        <h3>{firmName}</h3>
        {products.map((item) => {
          return (
            <div className="productBox">
              <div>
                <div>
                  <strong>{item.productName}</strong>
                </div>
                <div>₹{item.price}</div>
                <div>{item.description}</div>
              </div>

              <div className="productGroup">
                <img
                  src={`${API_PATH}uploads/${item.image}`}
                  alt={item.image}
                />
                <div className="addButton">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
