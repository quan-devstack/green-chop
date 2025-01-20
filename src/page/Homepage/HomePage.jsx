import Header from "../../components/Header/Header";
import BannerSection from "../../components/Sections/BannerSection/BannerSection";
import AchievsSection from "../../components/Sections/AchievsSection/AchievsSection";
import NewsSection from "../../components/Sections/NewsSection/NewSection";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import QualitySection from "../../components/Sections/QualitySection/QualitySection";
import SupportSection from "../../components/Sections/SupportSection/SupportSection";
import CompSection from "../../components/Sections/CompSection/CompSection";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      {/* header */}
      <Header />

      {/* main */}
      <main>
        {/* banner-section */}
        <BannerSection />

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
        <SupportSection />
      </main>

      {/* footer */}
      <Footer />
    </>
  );
};

export default HomePage;
