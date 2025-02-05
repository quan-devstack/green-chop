import { useNavigate, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { news } from "../../data/news.json";
import style from "./NewsPage.module.scss";
import nextIc from "/icons/next-ic.svg";
import calenderIc from "/icons/calendar-ic.svg";

const NewsPage = () => {
  const nav = useNavigate();

  const headlineArticles = news.filter(
    (article) => article.caption === "Tin nổi bật"
  );

  const popularArticles = news.filter(
    (article) => article.caption === "Tin phổ biến"
  );

  return (
    <>
      <Header />
      <main className={style.newsPage}>
        {/* name-section */}
        <section className={style.nameSection}>
          <div className="container">
            <h1 className={style.title}>Tin tức</h1>
          </div>
        </section>

        {/* featured-section */}
        <section className={style.featuredSection}>
          <div className="container">
            {headlineArticles.map((item) => (
              <article className={style.featuredArticle} key={item.id}>
                <img
                  src={item.thumnail}
                  alt="thumbnail"
                  className={style.featuredThumbnail}
                />

                <div className={style.featuredContent}>
                  <span className={style.highlight}>Tin nổi bật</span>
                  <h2>{item.title}</h2>
                  <p>{item.desc}</p>
                  <Button
                    text={"Xem thêm"}
                    className={"next-btn"}
                    icon={nextIc}
                    onClick={() =>
                      nav(`/news/${item.query}`, {
                        state: {
                          article: item,
                        },
                      })
                    }
                  />
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* popular-section */}
        <section className={style.popularSection}>
          <div className="container">
            <h2 className={style.title}>Bài viết phổ biến</h2>
            <div className={style.popularContent}>
              {popularArticles.map((item) => (
                <article
                  className={style.newsCard}
                  key={item.id}
                  onClick={() =>
                    nav(`/news/${featuredArticles[1].query}`, {
                      state: {
                        article: featuredArticles[1],
                        filterArticle: filteredNews,
                      },
                    })
                  }
                >
                  <figure className={style.cardImage}>
                    <img
                      className={style.image}
                      src={item.thumnail}
                      alt="new-img"
                    />
                    <figcaption className={style.caption}>
                      <span className={style.captionText}>{item.caption}</span>
                      <span className={style.captionDate}>
                        <img
                          src={calenderIc}
                          alt="calendar-ic"
                          width="15"
                          height="15"
                        />
                        {item.createdAt}
                      </span>
                    </figcaption>
                  </figure>
                  <div className={style.cardContent}>
                    <h2 className={style.cardTitle}>{item.title}</h2>
                    <p className={style.cardDesc}>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* footer-section */}
      <Footer />
    </>
  );
};

export default NewsPage;
