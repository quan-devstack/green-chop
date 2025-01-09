import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Achivement from "../../components/AchivementSection/Achivement";
import ProductSection from "../../components/ProductSection/ProductSection";
import QualitySection from "../../components/QualitySection/QualitySection";
import SupportSection from "../../components/SupportSection/SupportSection";
import ChopStructure from "../../components/StructureSection/ChopStructure";
import style from "./HomePage.module.scss";
import banner from "/images/main-banner.png";
import NewSection from "../../components/NewsSection/NewSection";

const HomePage = () => {
  return (
    <>
      <Header />
      <main className={style.main}>
        <section className={style.banner}>
          <div className={style.bannerContainer}>
            {/* banner-content */}
            <div className={style.bannerContent}>
              <span className={style.contentSubtitle}>
                GreenChop: Tiện gấp dễ gắp
              </span>
              <h1 className={style.contentTitle}>An toàn hơn giữa mùa Covid</h1>
              <p className={style.contentDesc}>
                GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường hiện
                tại. Sản phẩm cho phép người dùng tháo lắp và thay mới đầu đũa
                100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn ngừa khả năng
                lây lan dịch bệnh và đảm bảo an toàn cho người dùng
              </p>
            </div>

            {/* banner-background*/}
            <div className={style.bannerThumnail}>
              <img
                className={style.thumnailImg}
                src={banner}
                alt="main-banner"
              />
              <div className={style.thumnailCover}>
                <h1>Green Chop</h1>
              </div>
            </div>
          </div>
        </section>

        {/* achivement-section */}
        <Achivement />

        {/* product-section */}
        <ProductSection />

        {/* news-section */}
        <NewSection />

        {/* structure-section */}
        <ChopStructure />

        {/* quality-section */}
        <QualitySection />

        {/* support-section */}
        <SupportSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
