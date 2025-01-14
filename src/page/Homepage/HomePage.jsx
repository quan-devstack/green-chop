import Achivement from "../../components/Sections/AchevSection/AchevSection";
import NewsSection from "../../components/Sections/NewsSection/NewSection";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import QualitySection from "../../components/Sections/QualitySection/QualitySection";
import SupportSection from "../../components/Sections/SupportSection/SupportSection";
import CompSection from "../../components/Sections/CompSection/CompSection";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import style from "./HomePage.module.scss";
import banner from "/images/home-page/main-banner.png";
import thumbnail from "/images/home-page/supp-thumbnail.png";

const HomePage = () => {
  return (
    <>
      {/* header */}
      <Header />

      <main>
        {/* banner-section */}
        <section className={style.banner}>
          <div className="container">
            <div className={style.layout}>
              {/* banner-content */}
              <div className={style.content}>
                <span className={style.slogan}>GreenChop: Tiện gấp dễ gắp</span>
                <h1 className={style.title}>An toàn hơn giữa mùa Covid</h1>
                <p className={style.desc}>
                  GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường
                  hiện tại. Sản phẩm cho phép người dùng tháo lắp và thay mới
                  đầu đũa 100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn
                  ngừa khả năng lây lan dịch bệnh và đảm bảo an toàn cho người
                  dùng
                </p>
              </div>

              {/* banner-thumbnail*/}
              <div className={style.thumbnail}>
                <img src={banner} alt="main-banner" className={style.image} />
                <div className={style.cover}>
                  <h1 className={style.coverText}>Green Chop</h1>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* achivement-section */}
        <Achivement />

        {/* product-section */}
        <ProductSection />

        {/* news-section */}
        <NewsSection />

        {/* component-section */}
        <CompSection />

        {/* quality-section */}
        <QualitySection />

        {/* support-section */}
        <section className={style.support}>
          <div className={"container"}>
            <div className={style.wrapper}>
              <div className={style.thumbnail}>
                <img src={thumbnail} alt="thumbnail" />
              </div>
              <SupportSection />
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
