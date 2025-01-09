import style from "./ChopStructure.module.scss";
import compon01 from "/images/structure01.png";
import compon02 from "/images/structure02.png";
import compon03 from "/images/structure03.png";

const ChopStructure = () => {
  return (
    <>
      <section className={style.struc}>
        <div className={style.strucContent}>
          <h2 className={style.strucTitle}>
            <span>GreenChop bảo vệ</span>
            <span>người dùng như thế nào ?</span>
          </h2>
          <p className={style.strucDesc}>
            <span>Môi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa</span>
            <span>
              Người dùng có thể dễ dàng tách rời hoặc gắn liền 2 phần này với
              nhau
            </span>
          </p>
        </div>

        <div className={style.strucComponent}>
          {/* component-card */}
          <div className={style.componentContent}>
            <img
              className={style.componentThumbnail}
              src={compon01}
              alt="structure-img"
            />
            <h3 className={style.componentTitle}>01.Thân trên đũa</h3>
            <p className={style.componentDesc}>
              <span>Làm từ nhựa Melamine, đầy đủ điều</span>
              <span>kiện chứng nhận An toàn thực phẩm</span>
            </p>
          </div>

          {/* component-card */}
          <div className={style.componentContent}>
            <img
              className={style.componentThumbnail}
              src={compon02}
              alt="structure-img"
            />
            <h3 className={style.componentTitle}>02.Đầu đũa</h3>
            <p className={style.componentDesc}>
              Được làm từ gỗ tre và bảo quản trong bọc khử trùng 100%, không hề
              có sự xâm nhập của vi khuẩn/vì rus gây hại. Người dùng là người
              đầu tiên chạm tay vào đầu đũa sau khi mở bọc.
            </p>
          </div>

          {/* component-card */}
          <div className={style.componentContent}>
            <img
              className={style.componentThumbnail}
              src={compon03}
              alt="structure-img"
            />
            <h3 className={style.componentTitle}>03. Khớp Inox 304</h3>
            <p className={style.componentDesc}>
              Khớp Inox 304 để gắn 2 phần đũa với nhau
            </p>
          </div>
        </div>

        {/* cover */}
        <div className={style.strucCover}></div>
      </section>
    </>
  );
};

export default ChopStructure;
