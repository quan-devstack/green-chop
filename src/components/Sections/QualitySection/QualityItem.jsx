import style from "./QualitySection.module.scss";

const QualityItem = ({ icon, title, desc }) => {
  return (
    <div className={style.qualityItem}>
      <img className={style.icon} src={icon} alt="ic-orange" />
      <div className={style.content}>
        <h4 className={style.title}>{title}</h4>
        <p className={style.desc}>{desc}</p>
      </div>
    </div>
  );
};

export default QualityItem;
