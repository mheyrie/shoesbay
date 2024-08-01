import React from 'react'
import '../styles/components/Cards.css'
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill } from "react-icons/bs";

function Card() {
  return (
    <section className="product">
        <img
          src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg"
          alt="shoes"
          className="product-img"
        />
        <div className="product-details">
          <h3 className="product-title">Shoes</h3>
          <section className="product-review">
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <AiFillStar className="rating-star" />
            <span className="total-reviews">4</span>
          </section>
          <section className="product-price">
            <div className="price">
              <del>$300</del> $200
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