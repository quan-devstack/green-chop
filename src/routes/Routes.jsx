import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../page/Homepage/Home";
import AboutPage from "../page/Aboutpage/AboutPage";
import ProductPage from "../page/Productpage/ProductPage";
import News from "../page/Newpage/News";
import Contact from "../page/Contactpage/Contact";

const MainRoute = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/product/" element={<ProductPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    {/* <Footer /> */}
  </>
);

export default MainRoute;
