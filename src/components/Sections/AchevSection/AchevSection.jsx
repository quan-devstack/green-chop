import Esclipe from "../../Esclipe/Esclipe";
import AchevCard from "./AchevCard";
import { achivement } from "./achev-data.json";
import style from "./AchevSection.module.scss";
import bageIc from "/icons/badge-ic-01.svg";

const Achivement = () => {
  return (
    <section className={style.achiev}>
      <div className="container">
        <div className={style.header}>
          <h2 className={style.title}>
            GreenChop: Giữ an toàn trong từng bữa ăn của người việt
          </h2>
          <p className={style.subtitle}>
            Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
            tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
            mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
          </p>
        </div>

        <div className={style.body}>
          <div className={style.achevList}>
            {achivement.map((achev) => (
              <AchevCard
                key={achev.id}
                number={achev.number}
                title={achev.title}
                icon={bageIc}
              />
            ))}
          </div>

          <Esclipe
            position={{ top: "-80px", left: "30px" }}
            size={{ width: "200px", height: "200px" }}
            background={"green-20"}
          />
          <Esclipe
            position={{ bottom: "-80px", right: "30px" }}
            size={{ width: "200px", height: "200px" }}
            background={"orange-20"}
          />
        </div>
      </div>
    </section>
  );
};

export default Achivement;
