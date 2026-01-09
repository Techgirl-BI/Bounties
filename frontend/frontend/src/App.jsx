import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Product from "./pages/Product";
function App() {
  return <>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/products" element={<Product/>} />
  </Routes>
  </>
}
export default App
