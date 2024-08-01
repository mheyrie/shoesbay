import Navbar from "./Navigation/Navbar";
import Products from "./products/Products";
import Recommended from "./recommended/Recommended";
import "./index.css";
import Sidebar from "./sidebar/Sidebar";

function App() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <Recommended />
      <Products />
    </>
  );
}

export default App;
