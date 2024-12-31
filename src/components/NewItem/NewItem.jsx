import style from "./NewItem.module.scss";
import calender_ic from "/icons/calendar.png";

const NewItem = ({ img, grid_column }) => {
  return (
    <div style={{ gridColumn: `span ${grid_column}` }}>
      <img className={style.news__item__img} src={img} alt="new-img" />
      <div className={style.news__item__createdAt}>
        <span>Lorem ipsum</span>
        <span>
          <img src={calender_ic} alt="calendar-ic" width="15" height="15" />
          28 - 10 - 2021
        </span>
      </div>
      <h2 className={style.news__item__title}>
        Lorem ipsum dolor sit amet, cons in ectetuer adipiscing elit
      </h2>
      <p className={style.news__item__desc}>
        Dolor sit amet, cons ectetuer adipiscing elit, sed diam in on nonummy
        nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut
        wisi enim...
      </p>
    </div>
  );
};

export default NewItem;
