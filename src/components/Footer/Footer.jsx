import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import style from "../Footer/Footer.module.scss";
import logo from "../../assets/images/logo.png";
import alarm_ic from "../../assets/icons/alarm-orange.png";
import phone_ic from "../../assets/icons/phone-orange.png";
import mail_ic from "../../assets/icons/mail.png";
import globe_ic from "../../assets/icons/globe.png";
import map_ic from "../../assets/icons/map-pin.png";
import certificate from "../../assets/images/certificate.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.container}>
        <div className={style.footer__wrapper}>
          <div className={style.footer__wrapper__column_01}>
            <ul>
              <li>
                <img src={logo} alt="logo" />
              </li>
              <li>
                <p>GreenChop là bạn đồng hành của mọi người</p>
              </li>
            </ul>
          </div>

          <div className={style.footer__wrapper__column_02}>
            <div className={style.footer__column_content}>
              <h4 className={style.footer__column_content__title}>Trang chủ</h4>
              <ul>
                <li>
                  <a href="/">Về GreenChop</a>
                </li>
                <li>
                  <a href="/product">Sản phẩm</a>
                </li>
                <li>
                  <a href="/news">Tin tức</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={style.footer__wrapper__column_03}>
            <div className={style.footer__column_content}>
              <h4 className={style.footer__column_content__title}>Hỗ trợ</h4>
              <ul>
                <li>
                  <a href="/">Về GreenChop</a>
                </li>
                <li>
                  <img src={alarm_ic} alt="alarm-ic" />
                  Thứ 2 - Thứ 6
                </li>
                <li>
                  <img src={phone_ic} alt="alarm-ic" />
                  091 1717 222
                </li>
              </ul>
            </div>
          </div>

          <div className={style.footer__wrapper__column_04}>
            <div className={style.footer__column_content}>
              <h4 className={style.footer__column_content__title}>Liên hệ</h4>
              <ul>
                <li>
                  <img src={mail_ic} alt="mail-ic" />
                  greenchopvn@gmail.com
                </li>
                <li>
                  <img src={globe_ic} alt="global-ic" />
                  greenchop.vn
                </li>
                <li>
                  <img src={map_ic} alt="map-ic" />
                  428 Điện Biên Phủ, P11, Quận 10, TPHCM
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className={style.footer__devide} />
        <div className={style.footer__end}>
          <img src={certificate} alt="certificate" />
          <div className={style.footer__end__ic}>
            <FaYoutube size={40} />
            <FaFacebook size={40} />
            <FaTwitter size={40} />
            <FaInstagramSquare size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
