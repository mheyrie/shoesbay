import React from "react";
import "../../styles/sidebar/Price.css";

function Price() {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className="price-items">
        <label className="price-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span> All
        </label>
        <label className="price-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span> $0 - $50
        </label>
        <label className="price-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span> $50 - $100
        </label>
        <label className="price-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span> $100 - $150
        </label>
        <label className="price-label-container">
          <input type="radio" name="test2" />
          <span className="checkmark"></span> Over $150
        </label>
      </div>
    </div>
  );
}

export default Price;
