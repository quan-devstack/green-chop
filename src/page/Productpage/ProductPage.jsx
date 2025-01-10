import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import StructureSection from "../../components/Sections/StructureSection/StructureSection";
import style from "./ProductPage.module.scss";
import Esclipe from "../../components/Esclipe/Esclipe";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className={style.productPage}>
        {/* heading-section */}
        <section className={style.heading}>
          <div className={"container"}>
            <h1 className={style.headingContent}>Sản phẩm</h1>
          </div>
        </section>

        {/* product-section */}
        <ProductSection />

        {/* intro-section */}
        <section className={style.pageIntro}>
          <div className="container">
            <div className={style.wrapper}>
              <div className={style.svg01}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="165"
                  height="158"
                  viewBox="0 0 165 158"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.1764 53.9784C18.1331 38.9289 35.115 32.5391 49.5258 23.536C62.1446 15.6525 74.2444 7.67077 88.8281 4.84143C105.669 1.57426 125.642 -4.59827 138.982 6.18091C152.368 16.9975 146.482 38.5852 151.146 55.1979C155.312 70.0395 165.044 82.7584 164.81 98.1865C164.519 117.306 164.806 140.432 149.672 152.081C134.535 163.733 112.926 153.957 93.913 152.759C77.1944 151.705 60.4958 152.838 45.4325 145.511C28.5662 137.307 11.0201 126.702 4.26011 109.152C-2.54463 91.4853 1.31472 70.7394 10.1764 53.9784Z"
                    fill="#F2FFEC"
                  />
                </svg>
              </div>

              <div className={style.svg02}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="407"
                  height="399"
                  viewBox="0 0 407 399"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M223.562 4.13051C267.968 -5.85559 318.508 5.8441 353.023 35.4768C386.627 64.3275 392.056 112.563 400.466 156.012C407.878 194.309 411.135 233.259 398.444 270.15C385.907 306.597 361.42 337.319 330.271 360.07C299.043 382.879 262.166 400.46 223.562 397.883C186.176 395.388 159.762 364.158 126.736 346.487C86.4243 324.918 28.9953 324.085 8.93271 283.046C-11.1695 241.926 7.16654 189.967 31.1605 150.983C52.457 116.382 98.1952 110.18 130.509 85.5162C164.09 59.885 182.327 13.4035 223.562 4.13051Z"
                    fill="#FF9F6A"
                  />
                </svg>
              </div>

              <div className={style.introContent}>
                <div className={style.contentTitle}>
                  <span>Đũa thay đầu GreenChop - </span>
                  <span>thẻ xanh an toàn toàn trong từng bữa ăn</span>
                </div>
                <p className={style.contentDesc}>
                  GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường
                  hiện tại. Sản phẩm cho phép người dùng tháo lắp và thay mới
                  đầu đũa 100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn
                  ngừa khả năng lây lan dịch bệnh và đảm bảo an toàn cho người
                  dùng.
                </p>
              </div>

              <div className={style.introThumnail}>
                <img src="/images/product-page-img-01.png" alt="thumbnail" />
              </div>
            </div>
          </div>
        </section>

        {/* structure-section */}
        <StructureSection />

        {/* guideline-section */}
        <section className={style.guide}>
          <div className={style.content}>
            <h2 className={style.contentTitle}>
              <span>Hướng dẫn thao tác</span>
              <span>sử dụng đũa GreenChop</span>
            </h2>
            <p className={style.contentDesc}>
              Bằng cách này, người dùng sẽ có một đôi đũa với đầu đũa mới 100%,
              không qua tay bất kỳ ai trước đó
            </p>
          </div>

          <div className="container">
            <div className={style.wrapper}>
              <div className={style.step}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>01</span>
                  <span className={style.stepDesc}>
                    Tháo bọc đầu đũa, lấy đầu đũa tre đã khử trùng 100% ghép vào
                    thân đũa, tạo thành một đôi đũa hoàn chỉnh.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>

              <div className={style.step}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>02</span>
                  <span className={style.stepDesc}>
                    Tháo bọc đầu đũa, lấy đầu đũa tre đã khử trùng 100% ghép vào
                    thân đũa, tạo thành một đôi đũa hoàn chỉnh.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>

              <div className={style.step}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>03</span>
                  <span className={style.stepDesc}>
                    Tháo bọc đầu đũa, lấy đầu đũa tre đã khử trùng 100% ghép vào
                    thân đũa, tạo thành một đôi đũa hoàn chỉnh.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>

              <div className={style.step}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>04</span>
                  <span className={style.stepDesc}>
                    Tháo bọc đầu đũa, lấy đầu đũa tre đã khử trùng 100% ghép vào
                    thân đũa, tạo thành một đôi đũa hoàn chỉnh.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>
            </div>
          </div>

          <div className={style.detail}>
            <div className={style.detailContent}></div>
            <div className={style.detailThumbnail}>{/*  */}</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
