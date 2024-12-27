import ProductItem from "../Product/ProductItem";
import style from "./Product.module.scss";
import donut from "../../assets/images/donut.png";
import dice from "../../assets/images/dice.png";
import gamepad from "../../assets/images/gamepad.png";

const Product = () => {
  return (
    <>
      <h2 className={style.product__title}>Sản phẩm</h2>
      <div className={style.product__list}>
        <ProductItem
          img={donut}
          title_a="Combo"
          title_b="Quán ăn"
          quantity="1 Thùng 1000 đôi"
          price="600.000"
          esclipe_bg="orange-30"
        />

        <ProductItem
          img={dice}
          title_a="Combo"
          title_b="Quán ăn - Nhà hàng"
          quantity="1 Thùng 2000 đôi"
          price="1.200.000"
          esclipe_bg="green-30"
        />

        <ProductItem
          img={gamepad}
          title_a="Combo Quán ăn"
          title_b="Nhà hàng - Khách sạn"
          quantity="1 Thùng 3000 đôi"
          price="1.800.000"
          esclipe_bg="orange-30"
        />

        <ProductItem
          img={donut}
          title_a="Combo "
          title_b="Gia đình bé xinh"
          quantity="1 Thùng 100 đôi"
          price="60.000"
          esclipe_bg="orange-30"
        />

        <ProductItem
          img={dice}
          title_a="Combo "
          title_b="Gia đình"
          quantity="1 Thùng 200 đôi"
          price="120.000"
          esclipe_bg="green-30"
        />

        <ProductItem
          img={gamepad}
          title_a="Combo"
          title_b="Đại Gia đình"
          quantity="1 Thùng 300 đôi"
          price="180.000"
          esclipe_bg="orange-30"
        />
      </div>
    </>
  );
};

export default Product;
