import React from "react";
import "../styles/components/Input.css";

function Input() {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name="test" />
      <span className="checkmark"></span> All
    </label>
  );
}

export default Input;
