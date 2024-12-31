import Header from "../../components/Header/Header";
import Achivement from "../../components/Achivement/Achivement";
import style from "./AboutPage.module.scss";
import aboutImg01 from "/images/about-img-01.png";
import aboutImg02 from "/images/about-img-02.png";
import aboutImg03 from "/images/about-img-03.png";
import aboutImg04 from "/images/about-img-04.png";
import quotes_open from "/icons/quotes-open.png";
import quotes_close from "/icons/quotes-close.png";

const AboutPage = () => {
  return (
    <>
      <Header />
      <section className={style.about}>
        <div className={style.container}>
          <h1 className={style.title}>Về GreenChop</h1>
        </div>
      </section>

      <section className={style.achivement}>
        <div className={style.container}>
          <Achivement />
        </div>
      </section>

      <section className={style.detail}>
        <div className={style.container}>
          <h2 className={style.detail__title}>Về GreenChop</h2>
          <article className={style.detail__article}>
            <div className={style.detail__article__content}>
              <p className={style.detail__article__content__desc}>
                Dù chỉ mới ra mắt từ đầu mùa dịch Covid 2021, thương hiệu
                GreenChop đã trở thành đối tác cung cấp sản phẩm đũa ăn tin cậy
                cho những tên tuổi lớn trong phân khúc nhà hàng, khách sạn, quán
                ăn,... tại Việt Nam.
              </p>
            </div>
            <div className={style.detail__article__img}>
              <img src={aboutImg01} alt="about-img" />
            </div>
          </article>

          <article className={style.detail__article}>
            <div className={style.detail__article__content}>
              <p className={style.detail__article__content__desc}>
                <span>
                  GreenChop - Tiện gấp dễ gắp: An toàn hơn với Covid Sản phẩm
                </span>
                chính của công ty là đũa thay đầu GreenChop. Đây chính là cái
                tên đã giúp các nhà hàng, khách sạn, quán ăn... đã dần lấy lại
                được sự tin tưởng của thực khách giữa mùa Covid. Đũa thay đầu là
                ý tưởng đột phá và tinh tế được xây dựng từ việc thấu hiểu hành
                vi ăn uống của khách hàng của đội ngũ GreenChop. Sản phẩm giúp
                người dùng đảm bảo tối đa sự riêng tư, giãn cách và an toàn
                trong bữa ăn, từ đó, xoa dịu tâm lý ngại “ăn ngoài” của khách
                hàng.
              </p>
            </div>
            <div className={style.detail__article__img}>
              <img src={aboutImg02} alt="about-img" />
            </div>
          </article>

          <article className={style.detail__article}>
            <div className={style.detail__article__content}>
              <p className={style.detail__article__content__desc}>
                Không chỉ là các chuỗi nhà hàng, khách sạn,..., nhiều người tiêu
                dùng cũng đã tin tưởng và chọn lựa GreenChop như một người bạn
                đồng hành không thể thiếu cùng gia đình của mình.
              </p>
            </div>
            <div className={style.detail__article__img}>
              <img src={aboutImg03} alt="about-img" />
            </div>
          </article>
        </div>
      </section>

      <section className={style.quotes}>
        <div className={style.quotes__background}>
          <img src={aboutImg04} alt="about-img" />
          <div className={style.quotes__overlay}></div>
        </div>
        <div className={style.quotes__content}>
          <h2>Sản phẩm chính của GreenChop</h2>
          <p>
            GreenChop đã nghiên cứu tâm lý ăn uống của người Việt để cho ra được
            sản phẩm với cấu trúc thông minh và thiết kế tinh tế. Đũa xanh
            GreenChop cho phép người dùng dễ dàng tháo lắp đầu và thân đũa. Việc
            thay thế đầu đũa mới trong mỗi bữa ăn giúp đảm bảo tính riêng tư và
            tối thiểu khả năng bị lây virus Covid cũng như các vi khuẩn gây bệnh
            khác. Sản phẩm đảm bảo thân thiện với môi trường và bảo vệ sức khỏe
            của người dùng với đầu đũa bằng gỗ tre được khử khuẩn 100%.
          </p>
          <img src={quotes_open} alt="quotes-ic" />
          <img src={quotes_close} alt="quotes-ic" />
        </div>
      </section>
    </>
  );
};

export default AboutPage;
