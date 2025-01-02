import Esclipe from "../Esclipe/Esclipe";
import AchivementItem from "./AchivementItem";
import { achivement } from "../../data/db.json";
import style from "./Achivement.module.scss";

const Achivement = () => {
  return (
    <section className={style.achievement}>
      <div className="container">
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
            {achivement.map((ach) => (
              <AchivementItem
                key={ach.id}
                number={ach.number}
                title={ach.title}
                icon={ach.icon}
              />
            ))}
          </div>
          <Esclipe position={"left"} background={"green-20"} size={"200"} />
          <Esclipe position={"right"} background={"orange-20"} size={"200"} />
        </div>
      </div>
    </section>
  );
};

export default Achivement;
