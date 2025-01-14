import ProductCard from "./ProductCard";
import { products } from "./product-data.json";
import style from "./ProductSection.module.scss";

const ProductSection = () => {
  return (
    <>
      <section className={style.product}>
        <div className={"container"}>
          <h2 className={style.header}>Sản phẩm</h2>

          <div className={style.productList}>
            {products.map((product) => (
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
