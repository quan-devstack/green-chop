import Esclipe from "../Esclipe/Esclipe";
import AchivementItem from "./AchivementItem";
import { achivement } from "../../data/db.json";
import style from "./Achivement.module.scss";

const Achivement = () => {
  return (
    <section className={style.achiev}>
      <div className="container">
        <div className={style.achievContent}>
          <h2 className={style.contentTitle}>
            GreenChop: Giữ an toàn trong từng bữa ăn của người việt
          </h2>
          <p className={style.contentDesc}>
            Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
            tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
            mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
          </p>
        </div>

        <div className={style.achievWrapper}>
          <div className={style.achievList}>
            {achivement.map((achiev) => (
              <AchivementItem
                key={achiev.id}
                number={achiev.number}
                title={achiev.title}
                icon={achiev.icon}
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
