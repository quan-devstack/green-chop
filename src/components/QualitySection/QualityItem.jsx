import style from "../../components/QualitySection/Quality.module.scss";

const QualityItem = ({ img, title, desc }) => {
  return (
    <div className={style.quality__item}>
      <img className={style.quality__item__img} src={img} alt="ic-orange" />
      <div className={style.quality__item__content}>
        <h4 className={style.quality__item__content__title}>{title}</h4>
        <p className={style.quality__item__content__desc}>{desc}</p>
      </div>
    </div>
  );
};

export default QualityItem;
