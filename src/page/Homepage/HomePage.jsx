import Header from "../../components/Header/Header";
import AchievsSection from "../../components/Sections/AchievsSection/AchievsSection";
import NewsSection from "../../components/Sections/NewsSection/NewSection";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import QualitySection from "../../components/Sections/QualitySection/QualitySection";
import SupportForm from "../../components/SupportForm/SupportForm";
import CompSection from "../../components/Sections/CompSection/CompSection";
import Footer from "../../components/Footer/Footer";
import style from "./HomePage.module.scss";
import supportThumbnail from "/images/home-page/supp-thumbnail.png";
import banner from "/images/home-page/main-banner.png";

const HomePage = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* main */}
      <main>
        {/* banner-section */}
        <section className={style.bannerSection}>
          <div className="container">
            <div className={style.layout}>
              {/* banner-content */}
              <div className={style.content}>
                <span className={style.slogan}>GreenChop: Tiện gấp dễ gắp</span>
                <h1 className={style.title}>An toàn hơn giữa mùa Covid</h1>
                <p className={style.description}>
                  GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường
                  hiện tại. Sản phẩm cho phép người dùng tháo lắp và thay mới
                  đầu đũa 100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn
                  ngừa khả năng lây lan dịch bệnh và đảm bảo an toàn cho người
                  dùng
                </p>
              </div>

              {/* banner-thumbnail */}
              <div className={style.thumbnail}>
                <img src={banner} alt="main-banner" className={style.image} />
                <div className={style.overlay}>
                  <span className={style.overlayText}>Green Chop</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* achivement-section */}
        <AchievsSection />

        {/* product-section */}
        <ProductSection limit={6} />

        {/* news-section */}
        <NewsSection limit={3} />

        {/* component-section */}
        <CompSection />

        {/* feature-section */}
        <QualitySection />

        {/* support-section */}
        <section className={style.supportSection}>
          <div className="container">
            <div className={style.layout}>
              <img src={supportThumbnail} alt="thumbnail" />
              <SupportForm />
            </div>
          </div>
        </section>
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;
