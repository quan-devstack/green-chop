import style from "./QualitySection.module.scss";

const QualityCard = ({ icon, title, desc }) => {
  return (
    <div className={style.qualityCard}>
      <img className={style.cardIcon} src={icon} alt="ic-orange" />
      <div className={style.cardContent}>
        <h4 className={style.cardTitle}>{title}</h4>
        <p className={style.cardDesc}>{desc}</p>
      </div>
    </div>
  );
};

export default QualityCard;
