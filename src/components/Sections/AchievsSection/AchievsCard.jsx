import style from "./AchievsCard.module.scss";

const AchevCard = ({ number, title, icon }) => {
  return (
    <div className={style.achevCard}>
      <img className={style.cardIcon} src={icon} alt="badge-ic" />
      <span className={style.cardNumber}>{number}</span>
      <p className={style.cardDesc}>{title}</p>
    </div>
  );
};

export default AchevCard;
