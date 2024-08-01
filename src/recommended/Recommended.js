import React from "react";
import "../styles/recommended/Recommended.css";
import Button from "../common/Button";

function Recommended({handleClick}) {
 
  return (
    <>
      <div className="recommended-container">
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-btns">
          <Button type='button' className='btn-primary btns' onClick={handleClick}>All Products</Button> 
          <Button type='button' className='btn-primary btns' onClick={handleClick}>Nike</Button> 
          <Button type='button' className='btn-primary btns' onClick={handleClick}>Pumas</Button> 
          <Button type='button' className='btn-primary btns' onClick={handleClick}>Addidas</Button> 
          <Button type='button' className='btn-primary btns' onClick={handleClick}>Vans</Button> 
        </div>
      </div>
    </>
  );
}

export default Recommended;
