import NewCard from "./NewCard";
import NextButton from "../../NextButton/NextButton";
import { news } from "./new-data.json";
import style from "./NewSection.module.scss";

const NewSection = () => {
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
          {news.map((item) => (
            <NewCard
              key={item.id}
              thumnail={item.thumnail}
              caption={item.thumnail_caption}
              createdAt={item.createdAt}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>

      <NextButton />
    </section>
  );
};

export default NewSection;
