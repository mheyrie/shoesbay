import React from "react";
import "../../styles/sidebar/Colors.css";
import Input from "../../components/Input";
function Colors({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title color-title">Color</h2>
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="" name="test3" />
        <span className="checkmark all"></span>All
      </label>
      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test3"
        color="black"
      />
      <Input handleChange={handleChange} value="red" title="Red" name="test3"color="red" />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test3"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test3"
        color="blue"
      />
      <label className="sidebar-label-container">
        <input type="radio" onChange={handleChange} value="white" name="test" />
        <span
          className="checkmark"
          style={{ backgroundColor: "white", border: "2px solid black", color:"black"}}
        ></span>
        White
      </label>
    </div>
  );
}

export default Colors;
