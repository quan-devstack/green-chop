import Esclipe from "../../Esclipe/Esclipe";
import AchevCard from "./AchievsCard";
import { achivement } from "../../../data/achievs.json";
import style from "./AchievsSection.module.scss";
import bageIc from "/icons/badge-ic-01.svg";

const AchievsSection = () => {
  return (
    <section className={style.achievSection}>
      <div className="container">
        <h2 className={style.title}>
          GreenChop: Giữ an toàn trong từng bữa ăn của người việt
        </h2>

        <p className={style.description}>
          Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
          tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
          mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
        </p>

        <div className={style.achievContent}>
          <div className={style.achievList}>
            {achivement.map((achev) => (
              <AchevCard
                key={achev.id}
                number={achev.number}
                title={achev.title}
                icon={bageIc}
              />
            ))}
          </div>

          <div className={style.esclipe}>
            <Esclipe className={"medium-size"} background={"green-20"} />
          </div>

          <div className={style.esclipe}>
            <Esclipe className={"medium-size"} background={"orange-20"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievsSection;
