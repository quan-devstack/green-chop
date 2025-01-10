import Esclipe from "../../Esclipe/Esclipe";
import AchivementItem from "./AchevItem";
import { achivement } from "./achev-data.json";
import style from "./AchevSection.module.scss";
import bageIc from "/public/icons/badge-ic-01.svg";

const Achivement = () => {
  return (
    <section className={style.achiev}>
      <div className={style.achievContent}>
        <h1 className={style.title}>
          GreenChop: Giữ an toàn trong từng bữa ăn của người việt
        </h1>
        <p className={style.desc}>
          Với sự tinh tế trong việc thấu hiểu hành vi của khách hàng cùng ý
          tưởng đột phá, GreenChop đã trở thành sản phẩm không thể thiếu trong
          mọi bữa ăn mùa dịch tại các nhà hàng, khách sạn, quán ăn...
        </p>
      </div>

      <div className="container">
        <div className={style.wrapper}>
          <div className={style.achievList}>
            {achivement.map((achiev) => (
              <AchivementItem
                key={achiev.id}
                number={achiev.number}
                title={achiev.title}
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
