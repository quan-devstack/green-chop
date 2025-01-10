import style from "./NewSection.module.scss";
import calenderIc from "/icons/calendar-ic.svg";

const NewItem = ({
  thumnail,
  caption,
  title,
  desc,
  createdAt,
  grid_column,
}) => {
  return (
    <div
      className={style.newsItem}
      style={{ gridColumn: `span ${grid_column}` }}
    >
      <img className={style.newsThumnail} src={thumnail} alt="new-img" />
      <div className={style.newsCaption}>
        <span className={style.newsCaptionText}>{caption}</span>
        <span className={style.newsCaptionDate}>
          <img src={calenderIc} alt="calendar-ic" width="15" height="15" />
          {createdAt}
        </span>
      </div>
      <h2 className={style.newsTitle}>{title}</h2>
      <p className={style.newsDesc}>{desc}</p>
    </div>
  );
};

export default NewItem;
