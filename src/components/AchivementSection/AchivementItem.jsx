import style from "./Achivement.module.scss";

const AchivementItem = ({ number, title, icon }) => {
  return (
    <div className={style.achievItem}>
      <img className={style.achievIcon} src={icon} alt="badge-ic" />
      <span className={style.achievNumber}>{number}</span>
      <p className={style.achievDesc}>{title}</p>
    </div>
  );
};

export default AchivementItem;
