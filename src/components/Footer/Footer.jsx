import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import style from "../Footer/Footer.module.scss";
import logo from "/images/logo.png";
import alarm_ic from "/icons/alarm-orange.png";
import phone_ic from "/icons/phone-orange.png";
import mail_ic from "/icons/mail.png";
import globe_ic from "/icons/globe.png";
import map_ic from "/icons/map-pin.png";
import certificate from "/images/certificate.png";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={"container"}>
        <div className={style.footerWrapper}>
          <div className={style.footerColumn01}>
            <div className={style.columnContent}>
              <img src={logo} alt="logo" />
              <p className={style.columnText}>
                GreenChop là bạn đồng hành của mọi người
              </p>
            </div>
          </div>

          <div className={style.footerColumn02}>
            <div className={style.columnContent}>
              <h4 className={style.columnTitle}>Trang chủ</h4>
              <ul className={style.columnItem}>
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

          <div className={style.footerColumn03}>
            <div className={style.columnContent}>
              <h4 className={style.columnTitle}>Hỗ trợ</h4>
              <ul className={style.columnItem}>
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

          <div className={style.footerColumn04}>
            <div className={style.columnContent}>
              <h4 className={style.columnTitle}>Liên hệ</h4>
              <ul className={style.columnItem}>
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

        <hr className={style.footerDevider} />

        <div className={style.footerEnd}>
          <img src={certificate} alt="certificate" />
          <div className={style.footerSocial}>
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
