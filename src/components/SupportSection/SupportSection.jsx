import style from "../../components/SupportSection/Support.module.scss";
import cta_bg from "/images/cta-background.png";

const SupportSection = () => {
  return (
    <section className={style.support}>
      <div className={style.supportContainer}>
        <div className={style.supportBackground}>
          <img src={cta_bg} alt="cta-background" />
        </div>

        <form className={style.supportForm}>
          <div className={style.formContent}>
            <span>Bạn có bất kỳ thắc mắc nào.</span>
            <span>Hãy để lại tin nhắn cho chúng tôi nhé!</span>
          </div>

          <div className={style.formGroups}>
            <input type="text" name="name" placeholder="Tên của bạn" />
          </div>

          <div className={style.formGroups}>
            <input type="email" name="email" placeholder="Email" />
            <input type="text" name="phone" placeholder="Số điện thoại" />
          </div>

          <div className={style.formGroups}>
            <textarea
              name="content"
              rows="6"
              cols="50"
              placeholder="Nội dung..."
            ></textarea>
          </div>

          <div className={style.formGroups}>
            <button>Gửi</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SupportSection;
