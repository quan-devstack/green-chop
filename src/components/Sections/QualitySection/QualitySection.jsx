import QualityItem from "./QualityItem";
import { qualities } from "./quality-data.json";
import style from "./QualitySection.module.scss";

const QualitySection = () => {
  return (
    <section className={style.quality}>
      <div className="container">
        <div className={style.qualityList}>
          {qualities.map((item) => (
            <QualityItem
              key={item.id}
              icon={item.icon}
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
