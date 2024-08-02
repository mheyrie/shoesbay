import Navbar from "./Navigation/Navbar";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import "./index.css";
import Sidebar from "./sidebar/Sidebar";
import { useState } from "react";

// Database
import products from "./db/data";
import Card from "./components/Card";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");
  // Input Filter

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const filteredItems = products.filter((product) =>
    product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !== -1
  );

  // Radio Filter
  const handleChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  // Button Filter
  const handleClick = (e) => {
    setSelectedCategory(e.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Radio Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, title, newPrice, company }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          title === selected ||
          newPrice === selected
      );
    }

    return filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }) => (
      <Card
        key={Math.random()}
        img={img}
        star={star}
        title={title}
        reviews={reviews}
        prevPrice={prevPrice}
        newPrice={newPrice}
      />
    ));
  }

  const result = filteredData(products,selectedCategory,query)

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navbar query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result}/>
    </>
  );
}

export default App;
