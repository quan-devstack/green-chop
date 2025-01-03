import { useNavigate } from "react-router-dom";
import Esclipe from "../Esclipe/Esclipe";
import style from "./ProductSection.module.scss";

const ProductItem = ({
  id,
  img,
  title_a,
  title_b,
  quantity,
  price,
  esclipe_bg,
}) => {
  const nav = useNavigate();

  return (
    <div className={style.productCard}>
      <div className={style.cardImage}>
        <img src={img} alt="product-img" />
        <Esclipe position={"center"} background={esclipe_bg} />
      </div>

      <p className={style.cardTitle}>
        <span>{title_a}</span>
        <span>{title_b}</span>
      </p>

      <hr className={style.cardDivider} />

      <div className={style.cardNumber}>
        <span className={style.productQuantity}>{quantity}</span>
        <span className={style.productPrice}>Giá: {price} vnđ</span>
      </div>

      <button
        className={style.cardButton}
        onClick={() => nav(`/product/${id}`)}
      >
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

export default ProductItem;
