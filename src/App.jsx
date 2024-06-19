import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import { Routes, Route } from "react-router-dom";
import ShoppingBag from "./Components/Routes/ShoppingBag";
import ProductData from "./Components/Routes/ProductData";
import ProductDetails from "./Components/Routes/ProductDetails";
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ProductData />} />
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/shoppingbag" element={<ShoppingBag />} />
      </Routes>
    </>
  );
};

export default App;
