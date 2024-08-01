import React from 'react'
import '../../styles/sidebar/Category.css'
import Input from "../../components/Input"

function Category() {
  return (
    <div>
      <h2 className="sidebar-title category-title">Category</h2>
      <div>
        <Input/>
      </div>
    </div>
  )
}

export default Category