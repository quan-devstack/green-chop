import { Routes, Route } from "react-router-dom";
import HomePage from "../page/Homepage/HomePage";
import AboutPage from "../page/Aboutpage/AboutPage";
import ProductPage from "../page/Productpage/ProductPage";
import ProductDetail from "../page/Productpage/ProductDetail";
import News from "../page/Newpage/News";
import Contact from "../page/Contactpage/Contact";

const MainRoute = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="/product/" element={<ProductPage />} />
    <Route path="/product/:productId?" element={<ProductDetail />} />
    <Route path="/news" element={<News />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
);

export default MainRoute;
