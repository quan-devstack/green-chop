import Esclipe from "../Esclipe/Esclipe";
import style from "./Product.module.scss";
import donut from "../../assets/images/donut.png";
import dice from "../../assets/images/dice.png";
import gamepad from "../../assets/images/gamepad.png";

const Product = () => {
  return (
    <section className={style.product}>
      <div className={style.container}>
        <h2 className={style.product__title}>Sản phẩm</h2>

        <div className={style.product__list}>
          {/* product01 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={donut} alt="product-img" />
              <Esclipe position={"center"} background={"orange-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo</span>
              <span>Quán ăn</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 1000 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}>600.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* product02 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={dice} alt="product-img" />
              <Esclipe position={"center"} background={"green-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo</span>
              <span>Quán ăn - Nhà hàng</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 2000 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}>1.200.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* product03 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={gamepad} alt="product-img" />
              <Esclipe position={"center"} background={"orange-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo Quán ăn</span>
              <span>Nhà hàng - Khách sạn</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 3000 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}>1.800.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* product04 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={donut} alt="product-img" />
              <Esclipe position={"center"} background={"orange-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo</span>
              <span>Gia đình bé xinh</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 100 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}> 60.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* product05 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={dice} alt="product-img" />
              <Esclipe position={"center"} background={"orange-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo</span>
              <span>Gia đình</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 200 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}> 120.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>

          {/* product06 */}
          <div className={style.product__item}>
            <div className={style.product__item__box}>
              <img src={gamepad} alt="product-img" />
              <Esclipe position={"center"} background={"orange-30"} />
            </div>
            <p className={style.product__item__title}>
              <span>Combo</span>
              <span>Đại Gia đình</span>
            </p>
            <hr className={style.product__item__divider} />
            <div className={style.product__item__number}>
              <span className={style.quantity}>1 Thùng 300 đôi</span>
              <span className={style.price}>
                Giá:
                <span className={style.price__hightlight}> 180.000</span>
                vnđ
              </span>
            </div>
            <button className={style.product__item__btn}>
              Thêm vào giỏ hàng
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
