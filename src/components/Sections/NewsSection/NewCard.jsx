import { NavLink } from "react-router-dom";
import style from "./NewCard.module.scss";
import calenderIc from "/icons/calendar-ic.svg";

const NewCard = ({ id, thumnail, caption, title, desc, createdAt, grid }) => {
  return (
    <article style={grid} className={style.newsCard}>
      <NavLink to={`/news/${id}`}>
        <figure className={style.cardImage}>
          <img className={style.image} src={thumnail} alt="new-img" />
          <figcaption className={style.caption}>
            <span className={style.captionText}>{caption}</span>
            <span className={style.captionDate}>
              <img src={calenderIc} alt="calendar-ic" width="15" height="15" />
              {createdAt}
            </span>
          </figcaption>
        </figure>
        <div className={style.cardContent}>
          <h2 className={style.cardTitle}>{title}</h2>
          <p className={style.cardDesc}>{desc}</p>
        </div>
      </NavLink>
    </article>
  );
};

export default NewCard;
