import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Button from "../../components/Button/Button";
import style from "./ProductCart.module.scss";
import cartDemo from "/images/cartdemo.png";

const ProductCart = () => {
  return (
    <>
      {/* header-section */}
      <Header />

      {/* link-section */}
      <section className={style.linkSection}>
        <div className="container">
          <div className={style.layout}>
            <a href="/" className={style.link}>
              Trang chủ /
            </a>
            <a href="/product" className={style.link}>
              Sản phẩm /
            </a>
            <a href="/product/cart" className={style.link}>
              Giỏ hàng
            </a>
          </div>
        </div>
      </section>

      {/* cart-section */}
      <section className={style.cartSection}>
        <div className="container">
          <h2>Giỏ hàng của bạn</h2>
          <table className={style.cartTable}>
            <thead>
              <tr>
                <th className={style.tbHeader}></th>
                <th className={style.tbHeader}>Sản phẩm</th>
                <th className={style.tbHeader}>Giá tiền</th>
                <th className={style.tbHeader}>Số lượng</th>
                <th className={style.tbHeader}>Tổng giá</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className={style.tbData}>
                  <img src={cartDemo} alt="image" />
                </td>
                <td className={style.tbData}>
                  <p>Combo - Quán ăn</p>
                  <p>1 thùng 1000 đôi</p>
                </td>
                <td className={style.tbData}>600.000 VNĐ</td>
                <td className={style.tbData}>Couter </td>
                <td className={style.tbData}>1.200.000 VNĐ</td>
              </tr>

              <tr>
                <td className={style.tbData}>
                  <img src={cartDemo} alt="image" />
                </td>
                <td className={style.tbData}>
                  <p>Combo - Quán ăn</p>
                  <p>1 thùng 1000 đôi</p>
                </td>
                <td className={style.tbData}>600.000 VNĐ</td>
                <td className={style.tbData}>Couter </td>
                <td className={style.tbData}>1.200.000 VNĐ</td>
              </tr>

              <tr>
                <td className={style.tbData}>
                  <img src={cartDemo} alt="image" />
                </td>
                <td className={style.tbData}>
                  <p>Combo - Quán ăn</p>
                  <p>1 thùng 1000 đôi</p>
                </td>
                <td className={style.tbData}>600.000 VNĐ</td>
                <td className={style.tbData}>Couter </td>
                <td className={style.tbData}>1.200.000 VNĐ</td>
              </tr>
            </tbody>
          </table>
          <div className={style.btnAction}>
            <Button text={"Mua Thêm"} />
          </div>
        </div>
      </section>

      {/* total-section */}
      <section className={style.totalSection}>
        <div className="container">
          <div className={style.layout}>
            <h2 className={style.title}>Tổng giỏ hàng</h2>
            <div className={style.product}>
              <p>Tổng sản phẩm:</p>
              <span>3</span>
            </div>
            <hr />
            <div className={style.price}>
              <p>Tổng cộng:</p>
              <span>2.520.000 VNĐ</span>
            </div>
            <button className={style.btnAction}>Đặt hàng</button>
          </div>
        </div>
      </section>

      {/* footer-section */}
      <Footer />
    </>
  );
};

export default ProductCart;
