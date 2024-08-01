import Navbar from "./Navigation/Navbar";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import "./index.css";

function App() {
  return (
    <>
      <Navbar />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
