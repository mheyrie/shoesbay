import React from "react";
import "../../styles/sidebar/Price.css";
import Input from "../../components/Input";

function Price({handChange}) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      
      <Input />
    </div>
  );
}

export default Price;
