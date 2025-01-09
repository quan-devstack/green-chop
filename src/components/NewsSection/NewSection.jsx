import NewItem from "./NewItem";
import NextButton from "../NextButton/NextButton";
import { news } from "../../data/db.json";
import style from "./NewSection.module.scss";

const NewSection = () => {
  return (
    <section className={style.news}>
      <div className={style.newsContainer}>
        <div className={style.sectionContent}>
          <h2 className={style.sectionTitle}>Tin tức</h2>
          <p className={style.sectionDesc}>
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
            <NewItem
              key={item.id}
              thumnail={item.thumnail}
              caption={item.thumnail_caption}
              createdAt={item.createdAt}
              title={item.title}
              desc={item.desc}
              grid_column={"4"}
            />
          ))}
        </div>
      </div>
      <NextButton />
    </section>
  );
};

export default NewSection;
