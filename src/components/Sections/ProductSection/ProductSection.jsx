import { useNavigate } from "react-router-dom";
import Esclipe from "../../Esclipe/Esclipe";
import Button from "../../Button/Button";
import { products } from "../../../data/products.json";
import style from "./ProductSection.module.scss";

const ProductSection = () => {
  const nav = useNavigate();

  return (
    <>
      <section className={style.productSection}>
        <div className={"container"}>
          {/* section-title */}
          <h2 className={style.title}>Sản phẩm</h2>

          {/* product-list */}
          <div className={style.layout}>
            {products.map((product) => (
              // product-card
              <div className={style.card} key={product.id}>
                <div className={style.cardImage}>
                  <img
                    src={product.thumbnail}
                    alt="product-img"
                    className={style.image}
                  />
                  <div className={style.esclipe}>
                    <Esclipe className={`medium-size ${product.esclipe_bg}`} />
                  </div>
                </div>

                <p className={style.cardTitle}>
                  <span>{product.title_a}</span>
                  <span>{product.title_b}</span>
                </p>

                <hr className={style.cardDivider} />

                <div className={style.cardNumber}>
                  <span className={style.quantity}>{product.quantity}</span>
                  <span className={style.price}>Giá: {product.price} vnđ</span>
                </div>

                <Button
                  text={"Xem chi tiết"}
                  className={"detail-btn"}
                  onClick={() =>
                    nav(`/product/${product.query}`, {
                      state: {
                        title_a: product.title_a,
                        title_b: product.title_b,
                        thumbnail: product.thumbnail,
                        quantity: product.quantity,
                        price: product.price,
                      },
                    })
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductSection;
