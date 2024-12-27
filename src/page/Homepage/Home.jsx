import Achivement from "../../components/Achivement/Achivement";
import Product from "../../components/Product/Product";
import Quality from "../../components/QualitySection/Quality";
import Support from "../../components/SupportSection/Support";
import ChopStructure from "../../components/Structure/ChopStructure";
import NewItem from "../../components/NewItem/NewItem";
import NextButton from "../../components/NextButton/NextButton";
import style from "./Home.module.scss";
import banner from "../../assets/images/main-banner.png";
import news01 from "../../assets/images/new01.png";
import news02 from "../../assets/images/new02.png";
import news03 from "../../assets/images/new03.png";

const Home = () => {
  return (
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
                GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường hiện
                tại. Sản phẩm cho phép người dùng tháo lắp và thay mới đầu đũa
                100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn ngừa khả năng
                lây lan dịch bệnh và đảm bảo an toàn cho người dùng
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

      <section className={style.achivement}>
        <Achivement />
      </section>

      <section className={style.product}>
        <div className={style.container}>
          <Product />
        </div>
      </section>

      <section className={style.news}>
        <div className={style.news__container}>
          <div className={style.news__content}>
            <h2 className={style.news__content__title}>Tin tức</h2>
            <p className={style.news__content__desc}>
              <span>
                L nulla facilisis at vero eros et accumsan et iusto odio
                dignissim qui blandit praesent luptatum zzril
              </span>
              <span>
                delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
                dolor sit amet, cons ectetuer adipiscing
              </span>
            </p>
          </div>
          <div className={style.news__lists}>
            <NewItem img={news01} grid_column="4" />
            <NewItem img={news02} grid_column="4" />
            <NewItem img={news03} grid_column="4" />
          </div>
          <NextButton />
        </div>
      </section>

      <section className={style.struc}>
        <div className={style.container}>
          <ChopStructure />
        </div>
        <div className={style.struc__background}></div>
      </section>

      <section className={style.quality}>
        <div className={style.container}>
          <Quality />
        </div>
      </section>

      <section className={style.support}>
        <div className={style.container}>
          <Support />
        </div>
      </section>
    </main>
  );
};

export default Home;
