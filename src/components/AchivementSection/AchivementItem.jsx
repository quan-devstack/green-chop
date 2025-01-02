import style from "./Achivement.module.scss";

const AchivementItem = ({ number, title, icon }) => {
  return (
    <div className={style.achievement__item}>
      <img
        className={style.achievement__item__icon}
        src={icon}
        alt="badge-ic"
      />
      <span className={style.achievement__item__number}>{number}</span>
      <p className={style.achievement__item__desc}>{title}</p>
    </div>
  );
};

export default AchivementItem;
