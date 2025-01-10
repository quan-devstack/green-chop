import ProductItem from "./ProductItem";
import { products } from "./product-data.json";
import style from "./ProductSection.module.scss";

const ProductSection = () => {
  return (
    <>
      <section className={style.product}>
        <h1 className={style.heading}>Sản phẩm</h1>
        <div className={"container"}>
          <div className={style.productList}>
            {products.map((product) => (
              <ProductItem
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
