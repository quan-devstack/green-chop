import Esclipe from "../Esclipe/Esclipe";
import style from "../Achivement/Achivement.module.scss";
import bage_ic from "/icons/badge.png";

const Achivement = () => {
  return (
    <div className={style.container}>
      <div className={style.achievement__content}>
        <h2 className={style.achievement__content__heading}>
          GreenChop: Giữ an toàn trong từng bữa ăn của người việt
        </h2>
        <p className={style.achievement__content__desc}>
          Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
          tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
          mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
        </p>
      </div>

      <div className={style.achievement__wrapper}>
        <div className={style.achievement__list}>
          <div className={style.achievement__item}>
            <img
              className={style.achievement__item__icon}
              src={bage_ic}
              alt="badge-ic"
            />
            <span className={style.achievement__item__number}>1000+</span>
            <p className={style.achievement__item__desc}>
              Hộ gia đinh tin dùng GreenChop
            </p>
          </div>

          <div className={style.achievement__item}>
            <img
              className={style.achievement__item__icon}
              src={bage_ic}
              alt="badge-ic"
            />
            <span className={style.achievement__item__number}>600+</span>
            <p className={style.achievement__item__desc}>
              Nhà hàng đã phục vụ GreenChop cho thực khách
            </p>
          </div>

          <div className={style.achievement__item}>
            <img
              className={style.achievement__item__icon}
              src={bage_ic}
              alt="badge-ic"
            />
            <span className={style.achievement__item__number}>20+</span>
            <p className={style.achievement__item__desc}>
              Tỉnh thành được GreenChop phủ sóng
            </p>
          </div>
        </div>
        <Esclipe position={"left"} background={"green-20"} size={"200"} />
        <Esclipe position={"right"} background={"orange-20"} size={"200"} />
      </div>
    </div>
  );
};

export default Achivement;
