import { useParams, useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import style from "./NewsDetail.module.scss";
import calenderIc from "/icons/calendar-ic.svg";
import Footer from "../../components/Footer/Footer";

const NewsDetails = () => {
  const params = useParams();
  const location = useLocation();

  const newsTitle = params.newsTitle;
  const { article, filterArticle } = location.state || {};
  console.log(article);
  console.log(filterArticle);

  return (
    <>
      {/* header-section */}
      <Header />

      {/* main-section */}
      <main>
        {/* link-section */}
        <section className={style.linkSection}>
          <div className="container">
            <a href="/news" className={style.linkRef}>
              Tin Tức
            </a>
            <a href={`/news/${newsTitle}`} className={style.linkRef}>
              / Bài Viết: {article.id}
            </a>
          </div>
        </section>

        {/* content-section */}
        <section className={style.contentSection}>
          <div className="container">
            <div className={style.wrapper}>
              <article className={style.article}>
                <h1 className={style.articleTitle}>{article.title}</h1>

                <figure className={style.articleThumbnail}>
                  <img
                    src={article.thumnail}
                    alt="thumbanil"
                    className={style.thumbnail}
                  />
                  <figcaption className={style.thumbnailCaption}>
                    <span className={style.highlight}>Tin Nổi Bật</span>
                    <div className={style.createdAt}>
                      <img src={calenderIc} alt="icon" />
                      {article.createdAt}
                    </div>
                  </figcaption>
                </figure>

                <div className={style.articleDesc}>
                  <p className={style.paragraph}>
                    exerci tation ullamcorper suscipit lobortis nisl ut aliquip
                    ex ea commodo consequat. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto
                    odio dignissim qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi. aoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril
                  </p>

                  <p className={style.paragraph}>
                    delenit augue duis dolore te feugait nulla facilisi. Lorem
                    ipsum dolor sit amet, cons ectetuer adipiscing elit, sed
                    diam nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolor in hendrerit in
                    vulputate velit esse molestie consequat, vel illum dolore eu
                    feugiat nulla facilisis at vero eros et accumsan et iusto
                    odio dignissim qui blandit praesent luptatum zzril delenit
                    augue duis dolore te feugait nulla facilisi. Lorem ipsum
                    dolor sit amet, cons ectetuer adipiscing elit, sed diam
                    nonummy nibh euismod tincidunt ut laoreet dolore magna
                    aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation ullamcorper suscipit lobortis nisl ut
                    aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
                    consectetuer adipiscing elit, sed diam nonummy nibh euismod
                    tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
                    wisi enim ad minim veniam, quis nostrud exerci tation
                    ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                    consequat. Duis autem vel eum iriure dolo
                  </p>

                  <p className={style.paragraph}>
                    in hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laoreet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper suscipit lobortis
                    nisl ut aliquip ex ea commodo consequat. Duis autem vel eum
                    iriure dolor in hendrerit in vulputate velit esse molestie
                    consequat, vel illum dolore eu feugiat nulla facilisis at
                    vero eros et accumsan et iusto odio dignissim qui blandit
                    praesent luptatum zzril delenit augue duis dolore te feugait
                    nulla facilisi. Lorem ipsum dolor sit amet, cons ectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat
                  </p>
                </div>
              </article>

              <nav className={style.sideBar}>
                <span className={style.sideBarTitle}>Bài viết phổ biến</span>
                <div className={style.sideBarContent}>
                  {filterArticle.slice(0, 5).map((item) => (
                    <div key={item.id}>
                      <img
                        src={item.thumnail}
                        alt="icon"
                        className={style.thumbnail}
                      />
                      <span className={style.title}>{item.title}</span>
                    </div>
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </section>

        {/* footer-section */}
        <Footer />
      </main>
    </>
  );
};

export default NewsDetails;
