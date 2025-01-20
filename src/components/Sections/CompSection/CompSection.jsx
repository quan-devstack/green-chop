import style from "./CompSection.module.scss";
import compon01 from "/images/struc-page/comp-01.png";
import compon02 from "/images/struc-page/comp-02.png";
import compon03 from "/images/struc-page/comp-03.png";

const CompSection = () => {
  return (
    <>
      <section className={style.compSection}>
        <h2 className={style.title}>
          <span>GreenChop bảo vệ</span>
          <span>người dùng như thế nào ?</span>
        </h2>

        <p className={style.description}>
          <span>Môi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa</span>
          <span>
            Người dùng có thể dễ dàng tách rời hoặc gắn liền 2 phần này với nhau
          </span>
        </p>

        <div className={style.compList}>
          {/* component-card */}
          <div className={style.compCard}>
            <img
              className={style.cardImage}
              src={compon01}
              alt="structure-img"
            />
            <div className={style.cardContent}>
              <h3 className={style.cardTitle}>01.Thân trên đũa</h3>
              <p className={style.cardDesc}>
                <span>Làm từ nhựa Melamine, đầy đủ điều</span>
                <span>kiện chứng nhận An toàn thực phẩm</span>
              </p>
            </div>
          </div>

          {/* component-card */}
          <div className={style.compCard}>
            <img
              className={style.cardImage}
              src={compon02}
              alt="structure-img"
            />
            <div className={style.cardContent}>
              <h3 className={style.cardTitle}>02.Đầu đũa</h3>
              <p className={style.cardDesc}>
                Được làm từ gỗ tre và bảo quản trong bọc khử trùng 100%, không
                hề có sự xâm nhập của vi khuẩn/vì rus gây hại. Người dùng là
                người đầu tiên chạm tay vào đầu đũa sau khi mở bọc.
              </p>
            </div>
          </div>

          {/* component-card */}
          <div className={style.compCard}>
            <img
              className={style.cardImage}
              src={compon03}
              alt="structure-img"
            />
            <div className={style.cardContent}>
              <h3 className={style.cardTitle}>03. Khớp Inox 304</h3>
              <p className={style.cardDesc}>
                Khớp Inox 304 để gắn 2 phần đũa với nhau
              </p>
            </div>
          </div>
        </div>

        {/* overlay */}
        <div className={style.overlay}></div>
      </section>
    </>
  );
};

export default CompSection;
