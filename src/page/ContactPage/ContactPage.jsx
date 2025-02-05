import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Quality from "../../components/Sections/QualitySection/QualitySection";
import SupportForm from "../../components/SupportForm/SupportForm";
import style from "../../page/ContactPage/ContactPage.module.scss";
import clockIc from "/icons/alarm-ic.svg";
import phoneIc from "/icons/phone-ic.svg";
import mailIc from "/icons/mail-ic.svg";
import globalIc from "/icons/global-ic.svg";
import mapIc from "/icons/map-ic.svg";

const ContactPage = () => {
  return (
    <>
      {/* header-section */}
      <Header />

      {/* map-section */}
      <div className={style.mapSection}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29768.40735358239!2d105.8265886260852!3d21.150371798668665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135011877263c29%3A0xfed63a1860e09572!2zdHQuIMSQw7RuZyBBbmgsIMSQw7RuZyBBbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1738723525569!5m2!1svi!2s"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          sandbox="allow-scripts allow-same-origin allow-presentation"
        ></iframe>
      </div>

      {/* contact-section */}
      <div className={style.contactSection}>
        <div className="container">
          <div className={style.layout}>
            <div className={style.contactContent}>
              <h2>Liên Hệ</h2>
              <p>Đặt hàng trực tuyến (8h-22h)</p>
              <div className={style.contactIcons}>
                <div className={style.contactItem}>
                  <img src={clockIc} alt="icons" />
                  <span>Thứ 2 - Thứ 6</span>
                </div>

                <div className={style.contactItem}>
                  <img src={phoneIc} alt="icons" />
                  <span>091 1717 222</span>
                </div>

                <div className={style.contactItem}>
                  <img src={mailIc} alt="icons" />
                  <span>greenchopvn@gmail.com</span>
                </div>

                <div className={style.contactItem}>
                  <img src={globalIc} alt="icons" />
                  <span>Greenchop.vn</span>
                </div>

                <div className={style.contactItem}>
                  <img src={mailIc} alt="icons" />
                  <span>428 Điện Biên Phủ, P11, Quận 10, TPHCM</span>
                </div>
              </div>
            </div>

            <SupportForm />
          </div>
        </div>
      </div>

      {/* quality-section */}
      <Quality />

      {/* footer-section */}
      <Footer />
    </>
  );
};

export default ContactPage;
