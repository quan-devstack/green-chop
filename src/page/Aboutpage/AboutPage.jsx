import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Esclipe from "../../components/Esclipe/Esclipe";
import AchievsSection from "../../components/Sections/AchievsSection/AchievsSection";

import style from "./AboutPage.module.scss";
import thumbnail01 from "/images/about-page/thumbnail-01.png";
import thumbnail02 from "/images/about-page/thumbnail-02.png";
import thumbnail03 from "/images/about-page/thumbnail-03.png";
import thumbnail04 from "/images/about-page/thumbnail-04.png";
import thumbnail05 from "/images/about-page/thumbnail-05.png";
import quotesOpen from "/icons/quote-open-ic.svg";
import quoteClose from "/icons/quotes-close-ic.svg";

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className={style.aboutPage}>
        {/* name-section */}
        <section className={style.nameSection}>
          <div className={"container"}>
            <h1 className={style.title}>Về GreenChop</h1>
          </div>
        </section>

        {/* achiement-section */}
        <AchievsSection />

        {/* details-section */}
        <section className={style.detailSection}>
          <div className={"container"}>
            {/* article */}
            <article className={style.article}>
              <p className={style.articleDesc}>
                Dù chỉ mới ra mắt từ đầu mùa dịch Covid 2021, thương hiệu
                GreenChop đã trở thành đối tác cung cấp sản phẩm đũa ăn tin cậy
                cho những tên tuổi lớn trong phân khúc nhà hàng, khách sạn, quán
                ăn,... tại Việt Nam.
              </p>

              <img
                src={thumbnail01}
                alt="about-img"
                className={style.articleThumnail}
              />
            </article>

            {/* article */}
            <article className={style.article}>
              <p className={style.articleDesc}>
                Sản phẩm chính của công ty là đũa thay đầu GreenChop. Đây chính
                là cái tên đã giúp các nhà hàng, khách sạn, quán ăn... đã dần
                lấy lại được sự tin tưởng của thực khách giữa mùa Covid. Đũa
                thay đầu là ý tưởng đột phá và tinh tế được xây dựng từ việc
                thấu hiểu hành vi ăn uống của khách hàng của đội ngũ GreenChop.
                Sản phẩm giúp người dùng đảm bảo tối đa sự riêng tư, giãn cách
                và an toàn trong bữa ăn, từ đó, xoa dịu tâm lý ngại “ăn ngoài”
                của khách hàng.
              </p>

              <img
                src={thumbnail02}
                alt="about-img"
                className={style.articleThumbnail}
              />
            </article>

            {/* article */}
            <article className={style.article}>
              <p className={style.articleContent}>
                Không chỉ là các chuỗi nhà hàng, khách sạn,..., nhiều người tiêu
                dùng cũng đã tin tưởng và chọn lựa GreenChop như một người bạn
                đồng hành không thể thiếu cùng gia đình của mình.
              </p>

              <img
                src={thumbnail03}
                alt="about-img"
                className={style.articleThumbnail}
              />
            </article>
          </div>
        </section>

        {/* quotes-section */}
        <section className={style.quoteSection}>
          <div className={style.quoteBackground}>
            <img src={thumbnail04} alt="about-img" className={style.image} />
            <div className={style.overlay}></div>
          </div>

          <div className={style.quoteContent}>
            <h2 className={style.title}>Sản phẩm chính của GreenChop</h2>
            <p className={style.description}>
              GreenChop đã nghiên cứu tâm lý ăn uống của người Việt để cho ra
              được sản phẩm với cấu trúc thông minh và thiết kế tinh tế. Đũa
              xanh GreenChop cho phép người dùng dễ dàng tháo lắp đầu và thân
              đũa. Việc thay thế đầu đũa mới trong mỗi bữa ăn giúp đảm bảo tính
              riêng tư và tối thiểu khả năng bị lây virus Covid cũng như các vi
              khuẩn gây bệnh khác. Sản phẩm đảm bảo thân thiện với môi trường và
              bảo vệ sức khỏe của người dùng với đầu đũa bằng gỗ tre được khử
              khuẩn 100%.
            </p>

            <img className={style.openIc} src={quotesOpen} alt="quotes-ic" />
            <img className={style.closeIc} src={quoteClose} alt="quotes-ic" />
          </div>
        </section>

        {/* goal-section */}
        <section className={style.goalSection}>
          <div className={"container"}>
            <div className={style.layout}>
              <div className={style.goalThumbnail}>
                <img
                  src={thumbnail05}
                  width={500}
                  height={300}
                  alt="about-img"
                  className={style.image}
                />

                <div className={style.esclipe}>
                  <Esclipe className={"big-size"} background={"green-20"} />
                </div>

                <div className={style.esclipe}>
                  <Esclipe className={"medium-size"} background={"orange-20"} />
                </div>
              </div>

              <div className={style.goalContent}>
                <h2 className={style.title}>Sứ mệnh của GreenChop</h2>
                <p className={style.description}>
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

/*

*/
