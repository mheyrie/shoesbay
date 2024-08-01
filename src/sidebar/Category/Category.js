import React from 'react'
import '../../styles/sidebar/Category.css'

function Category() {
  return (
    <div>
      <h2 className="category-title">Category</h2>
      <div className="category-items">
        <label className="category-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> All
        </label>
        <label className="category-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> Sneakers
        </label>
        <label className="category-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> Flats
        </label>
        <label className="category-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> Heels
        </label>
        <label className="category-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> Sandals
        </label>
      </div>
    </div>
  )
}

export default Category