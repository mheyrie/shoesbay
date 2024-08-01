import React from "react";
import "../styles/products/Products.css";

import Card from "../components/Card";

function Products({result}) {
  return (
    <section className="product-container">
      {result}
    </section>
  );
}

export default Products;
