import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/ProductSection/ProductSection";
import ChopStructure from "../../components/StructureSection/ChopStructure";
import style from "./ProductPage.module.scss";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className={style.productPage}>
        {/* heading-section */}
        <section className={style.pageHeading}>
          <div className="container">
            <h1>Sản phẩm</h1>
          </div>
        </section>

        {/* product-section */}
        <ProductSection />

        {/* intro-section */}

        <ChopStructure />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
