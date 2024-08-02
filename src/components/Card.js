import React from 'react'
import '../styles/components/Cards.css'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card({ img, title, star, reviews, prevPrice, newPrice }) {
  return (
    <section className="product">
        <img
          src={img}
          alt={title}
          className="product-img"
        />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <section className="product-review">
            {star}
            {star}
            {star}
            {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="product-price">
            <div className="price">
              <del>{prevPrice}</del> ${newPrice}
            </div>
            <div className="bag">
              <BsFillBagHeartFill className="bag-icon"/>
            </div>
          </section>
        </div>
      </section>
  )
}

export default Card