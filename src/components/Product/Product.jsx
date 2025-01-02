import ProductItem from "../Product/ProductItem";
import { products } from "../../data/db.json";
import style from "./Product.module.scss";

const Product = () => {
  return (
    <>
      <section className={style.product}>
        <div className="container">
          <h2 className={style.product__title}>Sản phẩm</h2>
          <div className={style.product__list}>
            {products.map((product) => (
              <ProductItem
                key={product.id}
                id={product.id}
                img={product.img}
                title_a={product.title_a}
                title_b={product.title_b}
                quantity={product.quantity}
                price={product.price}
                esclipe_bg={product.esclipe_bg}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
