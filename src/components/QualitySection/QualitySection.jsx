import QualityItem from "./QualityItem";
import { qualities } from "../../data/db.json";
import style from "../../components/QualitySection/Quality.module.scss";

const QualitySection = () => {
  return (
    <section className={style.quality}>
      <div className="container">
        <div className={style.qualityList}>
          {qualities.map((item) => (
            <QualityItem
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
