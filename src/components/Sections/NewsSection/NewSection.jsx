import { useNavigate } from "react-router-dom";
import NewCard from "./NewCard";
import Button from "../../Button/Button";
import { news } from "./new-data.json";
import style from "./NewSection.module.scss";
import nextIc from "/icons/next-ic.svg";

const NewSection = ({ limit }) => {
  const nav = useNavigate();
  const displayCard = limit ? news.slice(0, limit) : news;

  return (
    <section className={style.news}>
      <div className={"container"}>
        <div className={style.header}>
          <h2 className={style.title}>Tin tức</h2>
          <p className={style.subtitle}>
            <span>
              L nulla facilisis at vero eros et accumsan et iusto odio dignissim
              qui blandit praesent luptatum zzril
            </span>
            <span>
              delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum
              dolor sit amet, cons ectetuer adipiscing
            </span>
          </p>
        </div>

        <div className={style.newsList}>
          {displayCard.map((item) => (
            <NewCard
              key={item.id}
              thumnail={item.thumnail}
              caption={item.thumnail_caption}
              createdAt={item.createdAt}
              title={item.title}
              desc={item.desc}
              grid={{ gridColumn: "span 4" }}
            />
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
