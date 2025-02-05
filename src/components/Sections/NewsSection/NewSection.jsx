import { useNavigate, NavLink } from "react-router-dom";
import Button from "../../Button/Button";
import { news } from "../../../data/news.json";
import style from "./NewSection.module.scss";
import nextIc from "/icons/next-ic.svg";
import calenderIc from "/icons/calendar-ic.svg";

const NewSection = ({ limit }) => {
  const nav = useNavigate();
  const displayCard = limit ? news.slice(0, limit) : news;

  return (
    <section className={style.newsSection}>
      <div className={"container"}>
        {/* section-title */}
        <h2 className={style.title}>Tin tức</h2>

        {/* section-desc */}
        <p className={style.description}>
          <span>
            L nulla facilisis at vero eros et accumsan et iusto odio dignissim
            qui blandit praesent luptatum zzril
          </span>
          <span>
            delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
            dolor sit amet, cons ectetuer adipiscing
          </span>
        </p>

        {/* news-list */}
        <div className={style.layout}>
          {displayCard.map((item) => (
            // news-card
            <article
              className={style.newsCard}
              key={item.id}
              onClick={() =>
                nav(`/news/${item.query}`, {
                  state: {
                    article: item,
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

        <div className={style.btnAction}>
          <Button
            text={"Xem thêm"}
            className={"next-btn"}
            icon={nextIc}
            onClick={() => nav("/news")}
          />
        </div>
      </div>
    </section>
  );
};

export default NewSection;
