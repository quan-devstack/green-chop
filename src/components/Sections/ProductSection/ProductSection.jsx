import ProductCard from "./ProductCard";
import { products } from "../../../data/products.json";
import style from "./ProductSection.module.scss";

const ProductSection = ({ limit }) => {
  const displayCard = limit ? products.slice(0, limit) : products;

  return (
    <>
      <section className={style.productSection}>
        <div className={"container"}>
          <h2 className={style.title}>Sản phẩm</h2>

          <div className={style.productList}>
            {displayCard.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                thumbnail={product.thumbnail}
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

export default ProductSection;
