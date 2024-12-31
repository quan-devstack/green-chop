import style from "../../components/SupportSection/Support.module.scss";
import cta_bg from "/images/cta-background.png";

const Support = () => {
  return (
    <div className={style.support__wrapper}>
      <div className={style.support__background}>
        <img src={cta_bg} alt="cta-background" />
      </div>

      <form className={style.support__form}>
        <div className={style.support__form__content}>
          <span>Bạn có bất kỳ thắc mắc nào.</span>
          <span>Hãy để lại tin nhắn cho chúng tôi nhé!</span>
        </div>
        <div className={style.support__form__groups}>
          <input type="text" name="name" placeholder="Tên của bạn" />
        </div>
        <div className={style.support__form__groups}>
          <input type="email" name="email" placeholder="Email" />
          <input type="text" name="phone" placeholder="Số điện thoại" />
        </div>
        <div className={style.support__form__groups}>
          <textarea
            name="content"
            rows="6"
            cols="50"
            placeholder="Nội dung..."
          ></textarea>
        </div>
        <div className={style.support__form__groups}>
          <button>Gửi</button>
        </div>
      </form>
    </div>
  );
};

export default Support;
