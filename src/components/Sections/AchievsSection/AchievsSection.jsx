import Esclipe from "../../Esclipe/Esclipe";
import { achivement } from "../../../data/achievs.json";
import style from "./AchievsSection.module.scss";
import badgeIc from "/icons/badge-ic-01.svg";

const AchievsSection = () => {
  return (
    <section className={style.achievSection}>
      <div className="container">
        {/* section-title */}
        <h2 className={style.title}>
          GreenChop: Giữ an toàn trong từng bữa ăn của người việt
        </h2>

        {/* section-desc */}
        <p className={style.description}>
          Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
          tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
          mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
        </p>

        {/* achev-list */}
        <div className={style.content}>
          <div className={style.layout}>
            {achivement.map((achev) => (
              <div className={style.card} key={achev.id}>
                <img className={style.cardIcon} src={badgeIc} alt="badge-ic" />
                <span className={style.cardNumber}>{achev.number}</span>
                <p className={style.cardDesc}>{achev.title}</p>
              </div>
            ))}
          </div>

          <div className={style.esclipe}>
            <Esclipe className={"medium-size green-20"} />
          </div>

          <div className={style.esclipe}>
            <Esclipe className={"medium-size orange-20"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievsSection;
