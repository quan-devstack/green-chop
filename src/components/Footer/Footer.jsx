import {
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
} from "react-icons/fa";
import style from "../Footer/Footer.module.scss";
import logo from "/public/images/logo.png";
import certificate from "/public/images/certificate.png";
import alarmIc from "/public/icons/alarm-ic.svg";
import phoneIc from "/public/icons/phone-ic.svg";
import mailIc from "/public/icons/mail-ic.svg";
import globalIc from "/public/icons/global-ic.svg";
import mapIc from "/public/icons/map-ic.svg";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.footerContainer}>
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
                <img src={alarmIc} alt="icon" />
                Thứ 2 - Thứ 6
              </li>
              <li>
                <img src={phoneIc} alt="icon" />
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
                <img src={mailIc} alt="icon" />
                greenchopvn@gmail.com
              </li>
              <li>
                <img src={globalIc} alt="icon" />
                greenchop.vn
              </li>
              <li>
                <img src={mapIc} alt="icon" />
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
    </footer>
  );
};

export default Footer;
