import style from "./BannerSection.module.scss";
import banner from "/images/home-page/main-banner.png";

const BannerSection = () => {
  return (
    <section className={style.bannerSection}>
      <div className="container">
        <div className={style.layout}>
          {/* banner-content */}
          <div className={style.bannerContent}>
            <span className={style.slogan}>GreenChop: Tiện gấp dễ gắp</span>
            <h1 className={style.title}>An toàn hơn giữa mùa Covid</h1>
            <p className={style.description}>
              GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường hiện
              tại. Sản phẩm cho phép người dùng tháo lắp và thay mới đầu đũa
              100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn ngừa khả năng
              lây lan dịch bệnh và đảm bảo an toàn cho người dùng
            </p>
          </div>

          {/* banner-thumbnail */}
          <div className={style.bannerThumbnail}>
            <img src={banner} alt="main-banner" className={style.thumbnail} />
            <div className={style.thumbnailOverlay}>
              <span className={style.overlayText}>Green Chop</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
