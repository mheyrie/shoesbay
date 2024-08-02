import React from "react";
import "../styles/navigation/Navbar.css";
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";

function Navbar({ handleInputChange, query }) {
  return (
    <nav>
      <div className="nv-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter your shoes name to search"
          onChange={handleInputChange}
          value={query}
        />
      </div>
      <div className="profile-container">
        <a href="#">
          <FiHeart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineShoppingCart className="nav-icons" />
        </a>
        <a href="#">
          <AiOutlineUserAdd className="nav-icons" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
