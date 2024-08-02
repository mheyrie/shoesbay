import React from "react";
import "../styles/components/Input.css";

function Input({handleInputChange, query,title,name,color}) {
  return (
    <label className="sidebar-label-container">
      <input onChange={handleInputChange} type="radio" value={query} name={name} />
      <span className="checkmark" style={{backgroundColor: color}}></span> {title}
    </label>
  );
}

export default Input;
