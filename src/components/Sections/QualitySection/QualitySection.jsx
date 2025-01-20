import QualityCard from "./QualityCard";
import { qualities } from "../../../data/qualities.json";
import style from "./QualitySection.module.scss";

const QualitySection = () => {
  return (
    <section className={style.qualitySection}>
      <div className="container">
        <div className={style.qualityList}>
          {qualities.map((item) => (
            <QualityCard
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
