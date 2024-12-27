import { Routes, Route } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Home from "../page/Homepage/Home";
import About from "../page/Aboutpage/About";
import Product from "../page/Productpage/Product";
import News from "../page/Newpage/News";
import Contact from "../page/Contactpage/Contact";

const MainRoute = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </>
);

export default MainRoute;
