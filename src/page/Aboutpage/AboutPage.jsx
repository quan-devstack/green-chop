import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Esclipe from "../../components/Esclipe/Esclipe";
import Achivement from "../../components/AchivementSection/Achivement";
import style from "./AboutPage.module.scss";
import aboutImg01 from "/images/about-img-01.png";
import aboutImg02 from "/images/about-img-02.png";
import aboutImg03 from "/images/about-img-03.png";
import aboutImg04 from "/images/about-img-04.png";
import aboutImg05 from "/images/about-img-05.png";
import quotes_open from "/icons/quotes-open.png";
import quotes_close from "/icons/quotes-close.png";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className={style.aboutPage}>
        <section className={style.pageHeading}>
          <div className="container">
            <h1>Về GreenChop</h1>
          </div>
        </section>

        <Achivement />

        <section className={style.pageDetail}>
          <div className={"container"}>
            <h2 className={style.pageTitle}>Về GreenChop</h2>
            {/* article-detail */}
            <article className={style.pageArticle}>
              <div className={style.articleContent}>
                <p className={style.articleDesc}>
                  Dù chỉ mới ra mắt từ đầu mùa dịch Covid 2021, thương hiệu
                  GreenChop đã trở thành đối tác cung cấp sản phẩm đũa ăn tin
                  cậy cho những tên tuổi lớn trong phân khúc nhà hàng, khách
                  sạn, quán ăn,... tại Việt Nam.
                </p>
              </div>
              <div className={style.articleThumnail}>
                <img src={aboutImg01} alt="about-img" />
              </div>
            </article>

            {/* article-detail */}
            <article className={style.pageArticle}>
              <div className={style.articleContent}>
                <p className={style.articleDesc}>
                  <span>
                    GreenChop - Tiện gấp dễ gắp: An toàn hơn với Covid Sản phẩm
                  </span>
                  chính của công ty là đũa thay đầu GreenChop. Đây chính là cái
                  tên đã giúp các nhà hàng, khách sạn, quán ăn... đã dần lấy lại
                  được sự tin tưởng của thực khách giữa mùa Covid. Đũa thay đầu
                  là ý tưởng đột phá và tinh tế được xây dựng từ việc thấu hiểu
                  hành vi ăn uống của khách hàng của đội ngũ GreenChop. Sản phẩm
                  giúp người dùng đảm bảo tối đa sự riêng tư, giãn cách và an
                  toàn trong bữa ăn, từ đó, xoa dịu tâm lý ngại “ăn ngoài” của
                  khách hàng.
                </p>
              </div>
              <div className={style.articleThumnail}>
                <img src={aboutImg02} alt="about-img" />
              </div>
            </article>

            {/* article-detail */}
            <article className={style.pageArticle}>
              <p className={style.articleDesc}>
                Không chỉ là các chuỗi nhà hàng, khách sạn,..., nhiều người tiêu
                dùng cũng đã tin tưởng và chọn lựa GreenChop như một người bạn
                đồng hành không thể thiếu cùng gia đình của mình.
              </p>
              <div className={style.articleThumnail}>
                <img src={aboutImg03} alt="about-img" />
              </div>
            </article>
          </div>
        </section>

        <section className={style.pageQuotes}>
          <div className={style.quoteBackground}>
            <img src={aboutImg04} alt="about-img" />
            <div className={style.backgroundOverlay}></div>
          </div>

          <div className={style.quoteContent}>
            <h2 className={style.quotesTitle}>Sản phẩm chính của GreenChop</h2>
            <p className={style.quotesDesc}>
              GreenChop đã nghiên cứu tâm lý ăn uống của người Việt để cho ra
              được sản phẩm với cấu trúc thông minh và thiết kế tinh tế. Đũa
              xanh GreenChop cho phép người dùng dễ dàng tháo lắp đầu và thân
              đũa. Việc thay thế đầu đũa mới trong mỗi bữa ăn giúp đảm bảo tính
              riêng tư và tối thiểu khả năng bị lây virus Covid cũng như các vi
              khuẩn gây bệnh khác. Sản phẩm đảm bảo thân thiện với môi trường và
              bảo vệ sức khỏe của người dùng với đầu đũa bằng gỗ tre được khử
              khuẩn 100%.
            </p>
            <img
              className={style.quoteIconOpen}
              src={quotes_open}
              alt="quotes-ic"
            />
            <img
              className={style.quoteIconClose}
              src={quotes_close}
              alt="quotes-ic"
            />
          </div>
        </section>

        <section className={style.pageDestiny}>
          <div className={"container"}>
            <div className={style.pageWrapper}>
              <img
                className={style.pageThumnail}
                src={aboutImg05}
                alt="about-background"
              />

              <div className={style.pageContent}>
                <h2 className={style.contentTitle}>Sứ mệnh của GreenChop</h2>
                <p className={style.contentDesc}>
                  Đội ngũ GreenChop gồm những người trẻ năng động và luôn mong
                  muốn cống hiến cho sức khỏe cộng đồng Việt Nam. Trên tiêu chí
                  đó, GreenChop đã và đang tiếp tục góp sức trong công cuộc
                  chống dịch hiện tại và nhu cầu vệ sinh thực phẩm lâu dài.
                  Trong tương lai, thương hiệu sẽ tiếp tục phát triển những dụng
                  cụ ăn uống cá nhân thông minh. Cùng với sự ủng hộ của các đối
                  tác và thực khách, GreenChop hứa hẹn sẽ xây dựng những thói
                  quen và môi trường ăn uống an toàn cho người Việt.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;
