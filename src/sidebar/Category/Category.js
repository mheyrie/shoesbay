import React from 'react'
import '../../styles/sidebar/Category.css'

function Category() {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>
      <div>
        <label htmlFor="" className="sidebar-label-container">
          <input type="radio" name="test" />
          <span className="checkmark"></span> All
        </label>
      </div>
    </div>
  )
}

export default Category