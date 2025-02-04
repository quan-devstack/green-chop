import { qualities } from "../../../data/qualities.json";
import style from "./QualitySection.module.scss";

const QualitySection = () => {
  return (
    <section className={style.qualitySection}>
      <div className="container">
        {/* qulity-list */}
        <div className={style.layout}>
          {qualities.map((item) => (
            <div className={style.qualityCard} key={item.id}>
              <img className={style.cardIcon} src={item.icon} alt="ic-orange" />
              <div className={style.cardContent}>
                <h4 className={style.cardTitle}>{item.title}</h4>
                <p className={style.cardDesc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;
