import { useParams } from "react-router-dom";
import Product from "../../components/Product/Product";
import style from "./ProductPage.module.scss";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div className={style.container}>
      {productId}
      <Product />
    </div>
  );
};

export default ProductPage;
