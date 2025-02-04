import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import { news } from "../../data/news.json";
import style from "./NewsPage.module.scss";
import nextIc from "/icons/next-ic.svg";

const NewsPage = () => {
  const nav = useNavigate();

  const featuredArticles = news.slice(0, 2);
  const filteredNews = news.filter(
    (article) => !featuredArticles.includes(article)
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
            <article className={style.featuredArticle}>
              <img
                src={featuredArticles[0].thumnail}
                alt="thumbnail"
                className={style.featuredThumbnail}
              />

              <div className={style.featuredContent}>
                <span className={style.highlight}>Tin nổi bật</span>
                <h2>{featuredArticles[0].title}</h2>
                <p>{featuredArticles[0].desc}</p>
                <Button
                  text={"Xem thêm"}
                  className={"next-btn"}
                  icon={nextIc}
                  onClick={() =>
                    nav(`/news/${featuredArticles[0].query}`, {
                      state: {
                        article: featuredArticles[0],
                        filterArticle: filteredNews,
                      },
                    })
                  }
                />
              </div>
            </article>

            <article className={style.featuredArticle}>
              <img
                src={featuredArticles[1].thumnail}
                alt="thumbnail"
                className={style.featuredThumbnail}
              />
              <div className={style.featuredContent}>
                <span className={style.highlight}>Tin nổi bật</span>
                <h2>{featuredArticles[1].title}</h2>
                <p>{featuredArticles[1].desc}</p>

                <Button
                  text={"Xem thêm"}
                  className={"next-btn"}
                  icon={nextIc}
                  onClick={() =>
                    nav(`/news/${featuredArticles[1].id}`, {
                      state: {
                        article: featuredArticles[1],
                        filterArticle: filteredNews,
                      },
                    })
                  }
                />
              </div>
            </article>
          </div>
        </section>

        {/* popular-section */}
        <section className={style.popularSection}>
          <div className="container">
            <h2 className={style.title}>Bài viết phổ biến</h2>
            <div className={style.popularContent}>
              {filteredNews.map((item) => (
                <NewCard
                  key={item.id}
                  id={item.id}
                  thumnail={item.thumnail}
                  caption={item.thumnail_caption}
                  createdAt={item.createdAt}
                  title={item.title}
                  desc={item.desc}
                  grid={{ gridColumn: "span 6" }}
                />
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
