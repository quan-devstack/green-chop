import QualityItem from "./QualityItem";
import style from "../../components/QualitySection/Quality.module.scss";
import bage_ic from "../../assets/icons/badge-orange.png";
import shield_ic from "../../assets/icons/shield-orange.png";
import start_ic from "../../assets/icons/start-orange.png";
import saving_ic from "../../assets/icons/saving-orange.png";
import unique_ic from "../../assets/icons/unique-orange.png";
import delivery_ic from "../../assets/icons/delivery-orange.png";

const Quality = () => {
  return (
    <div className={style.quality__list}>
      <QualityItem
        img={bage_ic}
        title="Chất liệu an toàn"
        desc="Phần đầu đũa được làm bằng bằng gỗ tre, đảm bảo cho sức khỏe người dùng"
      />

      <QualityItem
        img={shield_ic}
        title="Vệ sinh và khử khuẩn"
        desc="Đầu đũa mới 100% mỗi bữa ăn, không chung đụng đầu đũa với bất kì ai khác."
      />

      <QualityItem
        img={start_ic}
        title="Tiện lợi"
        desc="Thao tác tháo lắp nhanh gọn và đơn giản"
      />

      <QualityItem
        img={saving_ic}
        title="Tiết kiệm"
        desc="Giá thành đầu đũa cạnh tranh và hợp lý."
      />

      <QualityItem
        img={unique_ic}
        title="Độc quyền"
        desc="GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường Việt Nam hiện tại"
      />

      <QualityItem
        img={delivery_ic}
        title="Giao hàng"
        desc=" Giao hàng nhanh trong 24h"
      />
    </div>
  );
};

export default Quality;
