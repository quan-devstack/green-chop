import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import NewCard from "../../components/Sections/NewsSection/NewCard";
import { news } from "../../components/Sections/NewsSection/new-data.json";
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
        <section className={style.pageTitle}>
          <div className="container">
            <h1 className={style.title}>Tin tức</h1>
          </div>
        </section>

        <section className={style.featuredArticle}>
          <div className="container">
            <article className={style.article}>
              <img
                src={featuredArticles[0].thumnail}
                alt="thumbnail"
                className={style.image}
              />
              <div className={style.content}>
                <span className={style.highlight}>Tin nổi bật</span>
                <h2>{featuredArticles[0].title}</h2>
                <p>{featuredArticles[0].desc}</p>
                <Button
                  text={"Xem thêm"}
                  className={"next-btn"}
                  icon={nextIc}
                  onClick={() => nav(`/news/${featuredArticles[0].id}`)}
                />
              </div>
            </article>

            <article className={style.article}>
              <img
                src={featuredArticles[1].thumnail}
                alt="thumbnail"
                className={style.image}
              />
              <div className={style.content}>
                <span className={style.highlight}>Tin nổi bật</span>
                <h2>{featuredArticles[1].title}</h2>
                <p>{featuredArticles[1].desc}</p>
                <Button
                  text={"Xem thêm"}
                  className={"next-btn"}
                  icon={nextIc}
                  onClick={() => nav(`/news/${featuredArticles[1].id}`)}
                />
              </div>
            </article>
          </div>
        </section>

        <section className={style.popularArticle}>
          <div className="container">
            <h2 className={style.title}>Bài viết phổ biến</h2>
            <div className={style.newsList}>
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

      <Footer />
    </>
  );
};

export default NewsPage;
