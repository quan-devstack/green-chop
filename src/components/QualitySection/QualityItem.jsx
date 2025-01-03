import style from "../../components/QualitySection/Quality.module.scss";

const QualityItem = ({ img, title, desc }) => {
  return (
    <div className={style.qualityItem}>
      <img className={style.itemIcon} src={img} alt="ic-orange" />
      <div className={style.itemContent}>
        <h4 className={style.itemTitle}>{title}</h4>
        <p className={style.itemDesc}>{desc}</p>
      </div>
    </div>
  );
};

export default QualityItem;
