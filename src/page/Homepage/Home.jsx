import Achivement from "../../components/Achivement/Achivement";
import Product from "../../components/Product/Product";
import style from "./Home.module.scss";
import banner from "../../assets/images/main-banner.png";

const Home = () => {
  return (
    <>
      <main className={style.main}>
        <section className={style.banner}>
          <div className={style.container}>
            <div className={style.banner__wrapper}>
              <div className={style.banner__content}>
                <span className={style.banner__content__subheading}>
                  GreenChop: Tiện gấp dễ gắp
                </span>
                <h1 className={style.banner__content__heading}>
                  An toàn hơn giữa mùa Covid
                </h1>
                <p className={style.banner__content__desc}>
                  GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường
                  hiện tại. Sản phẩm cho phép người dùng tháo lắp và thay mới
                  đầu đũa 100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn
                  ngừa khả năng lây lan dịch bệnh và đảm bảo an toàn cho người
                  dùng
                </p>
              </div>

              <div className={style.banner__img}>
                <img
                  className={style.banner__img__main}
                  src={banner}
                  alt="main-banner"
                />
                <div className={style.banner__img__cover}>
                  <h1>Green Chop</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Achivement />
        <Product />
      </main>
    </>
  );
};

export default Home;
