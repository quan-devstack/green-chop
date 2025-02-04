import { useNavigate } from "react-router-dom";
import Esclipe from "../../Esclipe/Esclipe";
import Button from "../../Button/Button";
import { products } from "../../../data/products.json";
import style from "./ProductSection.module.scss";

const ProductSection = ({ limit }) => {
  const nav = useNavigate();
  const displayCard = limit ? products.slice(0, limit) : products;

  const navToDetailPage = (
    query,
    title_a,
    title_b,
    quantity,
    price,
    thumbnail
  ) => {
    nav(`/product/${query}`, {
      state: {
        title_a,
        title_b,
        quantity,
        price,
        thumbnail,
      },
    });
  };

  return (
    <>
      <section className={style.productSection}>
        <div className={"container"}>
          {/* section-title */}
          <h2 className={style.title}>Sản phẩm</h2>

          {/* product-list */}
          <div className={style.layout}>
            {displayCard.map((product) => (
              // product-card
              <div className={style.productCard} key={product.id}>
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
                    navToDetailPage(
                      product.query,
                      product.title_a,
                      product.title_b,
                      product.quantity,
                      product.price,
                      product.thumbnail
                    )
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
