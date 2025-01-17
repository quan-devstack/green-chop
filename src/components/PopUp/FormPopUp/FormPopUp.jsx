import { useState } from "react";
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Banner from "../../Banner/Banner";
import Button from "../../Button/Button";
import style from "./FormPopUp.module.scss";
import ConfirmPopUp from "../ConfirmPopUp/ConfirmPopUp";

const FormPopUp = ({ setOpenPopUp }) => {
  const [confirm, setConfirm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setConfirm(true);
  };

  return (
    <>
      {confirm ? (
        <ConfirmPopUp
          setOpenPopUp={setOpenPopUp}
          title={"Bạn đã đặt hàng thành công"}
        />
      ) : (
        <div className={style.formPopUp}>
          <div
            className={style.overlay}
            onClick={() => setOpenPopUp(false)}
          ></div>
          <div className={style.layout}>
            {/* form */}
            <form className={style.form} onSubmit={handleSubmit}>
              <h2 className={style.formTitle}>Nhập thông tin để đặt hàng.</h2>
              <p className={style.formDesc}>
                Bạn muốn mua hàng? Hãy đăng ký vào form này, Greenchop sẽ liên
                hệ bạn trong thời gian sớm nhất.
              </p>

              <div className={style.productInfo}>
                <h2 className={style.productTitle}>Combo - Quán ăn</h2>
                <hr className={style.divider} />
                <span className={style.quantity}>1 thùng 1000 đôi</span>
                <div className={style.price}>
                  <span>Giá</span>
                  <span className={style.highlight}>600.000đ</span>
                  <span>vnd</span>
                </div>
              </div>

              <div className={style.formGroup}>
                <div className={style.formField}>
                  <FaUser />
                  <input type="text" name="name" placeholder="Tên của bạn" />
                </div>

                <div className={style.formField}>
                  <MdEmail />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email của bạn"
                  />
                </div>

                <div className={style.formField}>
                  <FaPhoneAlt />
                  <input
                    type="phone"
                    name="phone"
                    placeholder="Số điện thoại"
                  />
                </div>

                <div className={style.formField}>
                  <Button text={"Gửi"} className={"send-btn"} />
                </div>
              </div>
            </form>

            {/* banner */}
            <Banner
              image={{ top: "0", right: "50px" }}
              coverBox={{ width: "430px", top: "0", right: "0" }}
              coverText={{ fontSize: "8rem", top: "230px", left: "-100px" }}
            />

            <div className={style.closeIc}>
              <IoIosCloseCircleOutline
                size={30}
                color="#FF6916"
                onClick={() => setOpenPopUp(false)}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FormPopUp;
