import Esclipe from "../Esclipe/Esclipe";
import style from "./Product.module.scss";

const ProductItem = ({
  img,
  title_a,
  title_b,
  quantity,
  price,
  esclipe_bg,
}) => {
  return (
    <div className={style.product__item}>
      <div className={style.product__item__box}>
        <img src={img} alt="product-img" />
        <Esclipe position={"center"} background={esclipe_bg} />
      </div>
      <p className={style.product__item__title}>
        <span>{title_a}</span>
        <span>{title_b}</span>
      </p>
      <hr className={style.product__item__divider} />
      <div className={style.product__item__number}>
        <span className={style.quantity}>{quantity}</span>
        <span className={style.price}>
          Giá:
          <span className={style.price__hightlight}>{price}</span>
          vnđ
        </span>
      </div>
      <button className={style.product__item__btn}>Thêm vào giỏ hàng</button>
    </div>
  );
};

export default ProductItem;
