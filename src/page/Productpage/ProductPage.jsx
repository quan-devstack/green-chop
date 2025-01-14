import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Esclipe from "../../components/Esclipe/Esclipe";
import ProductSection from "../../components/Sections/ProductSection/ProductSection";
import CompSection from "../../components/Sections/CompSection/CompSection";
import QualitySection from "../../components/Sections/QualitySection/QualitySection";
import style from "./ProductPage.module.scss";
import thumnail01 from "/images/product-page/thumbnail-01.png";
import thumnail02 from "/images/product-page/thumbnail-02.png";
import thumbnail03 from "/images/product-page/thumbnail-03.png";
import thumbnail04 from "/images/product-page/thumbnail-04.png";

const ProductPage = () => {
  return (
    <>
      <Header />
      <main className={style.productPage}>
        <section className={style.pageHeader}>
          <div className={"container"}>
            <h1 className={style.title}>Sản phẩm</h1>
          </div>
        </section>

        {/* product-section */}
        <ProductSection />

        {/* intro-section */}
        <section className={style.intro}>
          <div className="container">
            <div className={style.layout}>
              <div className={style.unknownShape}>
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

              <div className={style.unknownShape}>
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
                <div className={style.title}>
                  <span>Đũa thay đầu GreenChop - </span>
                  <span>thẻ xanh an toàn toàn trong từng bữa ăn</span>
                </div>
                <p className={style.desc}>
                  GreenChop là sản phẩm đũa thay đầu duy nhất trên thị trường
                  hiện tại. Sản phẩm cho phép người dùng tháo lắp và thay mới
                  đầu đũa 100% trong mỗi bữa ăn. Nhờ đó, GreenChop giúp ngăn
                  ngừa khả năng lây lan dịch bệnh và đảm bảo an toàn cho người
                  dùng.
                </p>
              </div>

              <div className={style.introThumnail}>
                <img src={thumnail01} alt="thumbnail" />
              </div>
            </div>
          </div>
        </section>

        {/* component-section */}
        <CompSection />

        {/* guideline-section */}
        <section className={style.guideline}>
          <div className="container">
            <div className={style.header}>
              <h2 className={style.title}>
                <span>Hướng dẫn thao tác</span>
                <span>sử dụng đũa GreenChop</span>
              </h2>
              <p className={style.subtitle}>
                Bằng cách này, người dùng sẽ có một đôi đũa với đầu đũa mới
                100%, không qua tay bất kỳ ai trước đó
              </p>
            </div>

            <div className={style.layout}>
              {/* guide-step */}
              <div className={style.guideStep}>
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

              {/* guide-step */}
              <div className={style.guideStep}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>02</span>
                  <span className={style.stepDesc}>
                    Dùng bữa với đũa GreenChop đã ghép. Sau khi dùng bữa xong,
                    tháo đầu đũa đã dùng để bỏ đi.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>

              {/* guide-step */}
              <div className={style.guideStep}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>03</span>
                  <span className={style.stepDesc}>
                    Giữ lại thân đũa, vệ sinh sạch sẽ để sử dụng cho những bữa
                    ăn sau đó.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>

              {/* guide-step */}
              <div className={style.guideStep}>
                <div className={style.stepContent}>
                  <span className={style.stepNumber}>04</span>
                  <span className={style.stepDesc}>
                    Tiếp tục sử dụng một đầu đũa mới để gắn vào thân đũa trong
                    lần dùng bữa tiếp theo.
                  </span>
                </div>
                <Esclipe
                  position={{ top: "-10px", left: "50px" }}
                  size={{ width: "150px", height: "150px" }}
                  background={"orange-10"}
                />
              </div>
            </div>

            {/* guide-more-info */}
            <div className={style.guideMoreInfo}>
              <div className={style.guideBox}>
                <p className={style.boxContent}>
                  Thao tác thay đầu đũa mỗi bữa ăn giúp người dùng sử dụng một
                  đôi đũa mới trong mọi bữa ăn và không có sự xâm nhập của
                  virus/vi khuẩn gây bệnh trước đó. Nhờ vậy, GreenChop đảm bảo
                  an toàn cho thực khách và đẩy lùi nguy cơ lây lan dịch bệnh
                  trong ăn uống hàng ngày.
                </p>
                <span className={style.boxBorder}></span>
              </div>

              <img
                src={thumnail02}
                alt="thumbnail"
                className={style.guideThumbnail}
              />
            </div>
          </div>
        </section>

        {/* protection-section */}
        <section className={style.protection}>
          <div className={style.header}>
            <span className={style.title}>Bảo vệ bản thân</span>
            <span className={style.title}>nguyên tắc 5K cùng Greenchop</span>
          </div>

          <div className={style.body}>
            <article className={style.protectInfo}>
              <div className="container">
                <div className={style.layout}>
                  <img
                    src={thumbnail03}
                    alt="thumbnail"
                    className={style.guideThumbnail}
                  />

                  <p className={style.guideDesc}>
                    Kể cả khi đã thực hiện 5K, việc dùng chung dụng cụ ăn uống
                    với người khác vẫn mang những tiềm tàng khả năng bị lây
                    bệnh. Lúc này, đầu đũa được thay thế mỗi bữa ăn giúp ngăn
                    ngừa sự bám víu của Covid 19 cũng như các loại vị
                    khuẩn/virus gây bệnh khác. Không chỉ có thể, GreenChop là sự
                    lựa chọn hoàn hảo cho những thực khách có thói quen sử dụng
                    dụng cụ cá nhân ngay cả tại những nơi công cộng một cách dễ
                    dàng.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="114"
                      height="89"
                      viewBox="0 0 114 89"
                      fill="none"
                      className={style.guideIcon}
                    >
                      <path
                        opacity="0.1"
                        d="M47.1336 28.4174C47.1336 46.0585 41.3478 62.2438 29.7763 76.9733C22.4589 85.8794 16.5881 89.7331 12.1637 88.5342C8.07957 86.9927 6.03752 84.6805 6.03752 81.5976C6.03752 78.686 7.39889 75.6031 10.1216 72.3489C12.6742 69.0947 14.7162 66.44 16.2477 64.3847C17.7793 62.3294 19.0555 60.1029 20.0766 57.705C22.459 52.9094 23.6501 47.0861 23.6501 40.2352C19.5661 41.4341 15.482 40.9203 11.3979 38.6937C3.91041 34.4119 0.166667 28.9312 0.166668 22.2515C0.166669 15.7432 2.20871 10.4337 6.29279 6.32314C10.2067 2.38386 15.6522 0.414228 22.6291 0.41423C29.6061 0.414231 35.477 3.06896 40.2417 8.37842C44.8363 13.8592 47.1336 20.5388 47.1336 28.4174ZM113.5 28.4174C113.5 46.7436 107.799 62.9289 96.3979 76.9733C87.7192 87.4209 80.487 90.5895 74.7012 86.4789C73.51 85.6225 72.9144 84.2524 72.9144 82.3684C72.9144 78.9429 74.1907 75.6031 76.7432 72.3489C79.1256 69.0947 81.0826 66.44 82.6141 64.3847C84.1456 62.3294 85.4219 60.1029 86.4429 57.7051C88.8253 52.9094 90.0165 47.0861 90.0165 40.2352C85.9324 41.4341 81.9334 40.9203 78.0195 38.6937C70.7022 34.4119 67.0435 28.9312 67.0435 22.2515C67.0435 15.7432 69.0005 10.4337 72.9144 6.32315C76.8283 2.38387 82.2738 0.41424 89.2508 0.414241C96.2277 0.414243 102.014 3.06898 106.608 8.37843C111.203 13.8592 113.5 20.5388 113.5 28.4174Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </p>
                </div>
                <div className={style.background}></div>
              </div>
            </article>

            <article className={style.protectInfo}>
              <div className="container">
                <div className={style.layout}>
                  <img
                    src={thumbnail04}
                    alt="thumbnail"
                    className={style.guideThumbnail}
                  />

                  <p className={style.guideDesc}>
                    Đũa GreenChop hoàn thiện cả về công năng lẫn thẩm mỹ. Đầu
                    đũa được làm từ 100% chất liệu tự nhiên, màu sắc hài hòa,
                    kiểu dáng cứng cáp không khác gì đũa ăn truyền thống. Hiện
                    đại, tối giản là những đặc tính nổi bật nhất khi bàn tới
                    thiết kế của sản phẩm. Chính vì thế, GreenChop dần trở thành
                    vật bất ly thân và giúp khẳng định sự đẳng cấp và sự tinh tế
                    của những thực khách văn minh.
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="112"
                      height="88"
                      viewBox="0 0 112 88"
                      fill="none"
                      className={style.guideIcon}
                    >
                      <path
                        opacity="0.1"
                        d="M65.5574 59.6062C65.5574 42.2979 71.2581 26.418 82.6595 11.9664C89.8692 3.22829 95.6537 -0.552644 100.013 0.623646C104.037 2.13602 106.049 4.40458 106.049 7.42933C106.049 10.286 104.708 13.3108 102.025 16.5036C99.5101 19.6964 97.4981 22.301 95.9891 24.3175C94.4801 26.334 93.2225 28.5185 92.2165 30.8711C89.8692 35.5763 88.6955 41.2897 88.6955 48.0113C92.7195 46.835 96.7436 47.3392 100.768 49.5237C108.145 53.7247 111.834 59.1021 111.834 65.6557C111.834 72.0413 109.822 77.2505 105.798 81.2835C101.941 85.1485 96.5759 87.081 89.7015 87.081C82.8271 87.081 77.0426 84.4763 72.3479 79.267C67.8209 73.8897 65.5574 67.3361 65.5574 59.6062ZM0.166992 59.6062C0.166992 41.6258 5.78386 25.7458 17.0176 11.9664C25.5686 1.71592 32.6945 -1.39285 38.3952 2.64014C39.5689 3.48035 40.1557 4.82468 40.1557 6.67314C40.1557 10.034 38.8982 13.3108 36.3832 16.5036C34.0359 19.6964 32.1077 22.301 30.5987 24.3175C29.0897 26.334 27.8322 28.5185 26.8262 30.8711C24.4788 35.5763 23.3051 41.2897 23.3051 48.0113C27.3292 46.835 31.2693 47.3392 35.1257 49.5237C42.3354 53.7247 45.9403 59.1021 45.9403 65.6557C45.9403 72.0413 44.0121 77.2505 40.1557 81.2835C36.2994 85.1485 30.934 87.081 24.0596 87.081C17.1853 87.081 11.4846 84.4763 6.95753 79.267C2.43051 73.8897 0.166992 67.3361 0.166992 59.6062Z"
                        fill="#2C2C2C"
                      />
                    </svg>
                  </p>
                </div>
                <div className={style.background}></div>
              </div>
            </article>
          </div>
        </section>

        {/* quality-section */}
        <QualitySection />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
