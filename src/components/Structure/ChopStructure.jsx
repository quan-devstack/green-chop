import style from "../../components/Structure/ChopStructure.module.scss";
import compon01 from "/images/structure01.png";
import compon02 from "/images/structure02.png";
import compon03 from "/images/structure03.png";

const ChopStructure = () => {
  return (
    <>
      <div className={style.structure__content}>
        <h2 className={style.structure__content__heading}>
          <span>GreenChop bảo vệ</span>
          <span>người dùng như thế nào ?</span>
        </h2>
        <p className={style.structure__content__desc}>
          <span>Môi đôi đũa GreenChop gồm 2 phần thân đũa và đầu đũa</span>
          <span>
            Người dùng có thể dễ dàng tách rời hoặc gắn liền 2 phần này với nhau
          </span>
        </p>
      </div>

      <div className={style.structure__comps}>
        <div className={style.structure__comps__detail}>
          <img
            className={style.structure__comps__detail__img}
            src={compon01}
            alt="structure-img"
          />
          <h3 className={style.structure__comps__detail__title}>
            01.Thân trên đũa
          </h3>
          <p className={style.structure__comps__detail__desc}>
            <span>Làm từ nhựa Melamine, đầy đủ điều</span>
            <span>kiện chứng nhận An toàn thực phẩm</span>
          </p>
        </div>

        <div className={style.structure__comps__detail}>
          <img
            className={style.structure__comps__detail__img}
            src={compon02}
            alt="structure-img"
          />
          <h3 className={style.structure__comps__detail__title}>02.Đầu đũa</h3>
          <p className={style.structure__comps__detail__desc}>
            Được làm từ gỗ tre và bảo quản trong bọc khử trùng 100%, không hề có
            sự xâm nhập của vi khuẩn/vì rus gây hại. Người dùng là người đầu
            tiên chạm tay vào đầu đũa sau khi mở bọc.
          </p>
        </div>

        <div className={style.structure__comps__detail}>
          <img
            className={style.structure__comps__detail__img}
            src={compon03}
            alt="structure-img"
          />
          <h3 className={style.structure__comps__detail__title}>
            03. Khớp Inox 304
          </h3>
          <p className={style.structure__comps__detail__desc}>
            Khớp Inox 304 để gắn 2 phần đũa với nhau
          </p>
        </div>
      </div>
    </>
  );
};

export default ChopStructure;
