import React from "react";
import "../styles/recommended/Recommended.css";
import Button from "../common/Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="recommended-container">
      <h2 className="recommended-title">Recommended</h2>
      <div className="recommended-btns">
        <Button
          type="button"
          title="All Products"
          value=""
          className="btn-primary btns"
          onClick={handleClick}
        />
        <Button
          type="button"
          title="Nike"
          value="Nike"
          className="btn-primary btns"
          onClick={handleClick}
        />
        <Button
          type="button"
          title="Adidas"
          value="Adidas"
          className="btn-primary btns"
          onClick={handleClick}
        />
        <Button
          type="button"
          title="Puma"
          value="Puma"
          className="btn-primary btns"
          onClick={handleClick}
        />
        <Button
          type="button"
          title="Vans"
          value="Vans"
          className="btn-primary btns"
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default Recommended;
