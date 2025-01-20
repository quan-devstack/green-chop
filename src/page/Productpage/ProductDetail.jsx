import { useState, useRef, useEffect } from "react";
import { useParams, useLocation, NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import FormPopUp from "../../components/PopUp/FormPopUp/FormPopUp";
import Button from "../../components/Button/Button";
import style from "./ProductDetail.module.scss";
import specIc01 from "/icons/spec-ic-01.svg";
import specIc02 from "/icons/spec-ic-02.svg";
import specIc03 from "/icons/spec-ic-03.svg";
import specIc04 from "/icons/spec-ic-04.svg";
import specIc05 from "/icons/spec-ic-05.svg";

const ProductDetail = () => {
  const location = useLocation();
  const { productId } = useParams();
  const detailElementRef = useRef(null);

  const { title_a, title_b, price, quantity, thumbnail } = location.state || {};

  const [init, setInit] = useState(1);
  const [changeContent, setChangeContent] = useState("desc");
  const [openPopUp, setOpenPopUp] = useState(false);

  useEffect(() => {
    if (detailElementRef.current) {
      detailElementRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [productId]);

  return (
    <div ref={detailElementRef}>
      {/* header */}
      <Header />

      {/* main */}
      <main className={style.productDetail}>
        <section className={style.pageHeader}>
          <NavLink to={"/product"}>Sản phẩm /</NavLink>
          {productId && (
            <span className={style.pageTitle}>
              Thông tin sản phẩm: {productId}
            </span>
          )}
        </section>

        <section className={style.productOverview}>
          <div className="container">
            <div className={style.layout}>
              <div className={style.productImage}>
                <div className={style.mainImage}>
                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={style.image}
                  />
                </div>
                <div className={style.smallImage}>
                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={style.image}
                  />

                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={style.image}
                  />

                  <img
                    src={thumbnail}
                    alt="thumbnail"
                    className={style.image}
                  />
                </div>
              </div>

              <div className={style.productInfo}>
                <h2 className={style.title}>
                  {title_a} - {title_b}
                </h2>
                <hr className={style.divider} />
                <div className={style.price}>
                  <span>Giá</span>
                  <span className={style.highlight}>{price}</span>
                  <span>vnđ</span>
                </div>
                <span className={style.quantity}>{quantity}</span>
                <p className={style.desc}>
                  exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex
                  ea commodo consequat. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit, sed diam nonummy nibh{" "}
                </p>
                <div className={style.actions}>
                  <div className={style.counter}>
                    <button className={style.counterDown}>-</button>
                    <span className={style.counterNUmber}>{init}</span>
                    <button className={style.counterUp}>+</button>
                  </div>
                  <Button
                    text={"Mua hàng"}
                    onClick={() => setOpenPopUp(true)}
                  />
                </div>
                <div className={style.category}>
                  <div className={style.categoryBrand}>
                    <span>Nhà sản xuất:</span>
                    <span>GreenChop</span>
                  </div>
                  <div className={style.categoryName}>
                    <span>Dòng sản phẩm:</span>
                    <span>Đũa gỗ thay đầu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={style.moreInfor}>
          <div className="container">
            <div className={style.btnActions}>
              <button
                className={
                  changeContent === "desc"
                    ? `${style.btnActive}`
                    : `${style.btn}`
                }
                onClick={() => setChangeContent("desc")}
              >
                Mô tả sản phẩm
              </button>
              <button
                className={
                  changeContent === "detail"
                    ? `${style.btnActive}`
                    : `${style.btn}`
                }
                onClick={() => setChangeContent("detail")}
              >
                Thông tin chi tiết
              </button>
            </div>
            <hr className={style.divider} />

            {changeContent === "desc" && (
              <div className={style.comps}>
                <div className={style.compDetail}>
                  <span className={style.compNumber}>01.</span>
                  <h3 className={style.compTitle}>Thân Trên</h3>
                  <p className={style.compDesc}>
                    <span>Làm từ nhựa Melamine</span>
                    <span>
                      {"("} được chứng nhận ATTP {")"}
                    </span>
                  </p>
                </div>

                <div className={style.compDetail}>
                  <span className={style.compNumber}>02.</span>
                  <h3 className={style.compTitle}>Khớp liên kết</h3>
                  <p className={style.compDesc}>Inox 304</p>
                </div>

                <div className={style.compDetail}>
                  <span className={style.compNumber}>03.</span>
                  <h3 className={style.compTitle}>Thân Dưới</h3>
                  <p className={style.compDesc}>Gỗ tre</p>
                </div>
              </div>
            )}

            {changeContent === "detail" && (
              <div className={style.specs}>
                <div className={style.specDetail}>
                  <img src={specIc01} alt="icon" className={style.specIcon} />
                  <div className={style.specContent}>
                    <h3 className={style.specTitle}>Chất liệu xanh</h3>
                    <p className={style.specDesc}>
                      100% bằng gỗ tự nhiên, đảm bảo cho nhu cầu sống xanh và
                      sức khỏe người dùng
                    </p>
                  </div>
                </div>

                <div className={style.specDetail}>
                  <img src={specIc02} alt="icon" className={style.specIcon} />
                  <div className={style.specContent}>
                    <h3 className={style.specTitle}>Vệ sinh và an toàn</h3>
                    <p className={style.specDesc}>
                      Đầu đũa mới 100% mỗi bữa ăn, không chung đụng đầu đũa với
                      bất kì người dùng nào khác.
                    </p>
                  </div>
                </div>

                <div className={style.specDetail}>
                  <img src={specIc03} alt="icon" className={style.specIcon} />
                  <div className={style.specContent}>
                    <h3 className={style.specTitle}>Tiện lợi</h3>
                    <p className={style.specDesc}>
                      Thao tác tháo lắp cực kỳ nhanh gọn và đơn giản, không quá
                      thời gian gỡ một bao đũa.
                    </p>
                  </div>
                </div>

                <div className={style.specDetail}>
                  <img src={specIc04} alt="icon" className={style.specIcon} />
                  <div className={style.specContent}>
                    <h3 className={style.specTitle}>Tiết kiệm</h3>
                    <p className={style.specDesc}>
                      Giá thành đầu đũa siêu hợp lý. Chỉ với giá của các loại
                      đũa 1 lần ăn ngoài thị trường, xanh và an toàn tuyệt đối.
                    </p>
                  </div>
                </div>

                <div className={style.specDetail}>
                  <img src={specIc05} alt="icon" className={style.specIcon} />
                  <div className={style.specContent}>
                    <h3 className={style.specTitle}>Sang trọng</h3>
                    <p className={style.specDesc}>
                      Thiết kế đũa tinh tế, cứng cáp và gần gũi với môi trường,
                      sang trọng và gần gũi với môi trường.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* pop-up */}
        {openPopUp && <FormPopUp setOpenPopUp={setOpenPopUp} />}

        {/* product-list */}
        <ProductSection limit={3} />

        {/* footer */}
        <Footer />
      </main>
    </div>
  );
};

export default ProductDetail;
