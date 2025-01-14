import style from "./SupportSection.module.scss";

const SupportSection = () => {
  return (
    <form className={style.form}>
      <div className={style.formContent}>
        <span>Bạn có bất kỳ thắc mắc nào.</span>
        <span>Hãy để lại tin nhắn cho chúng tôi nhé!</span>
      </div>

      <div className={style.formField}>
        <input
          type="text"
          name="name"
          placeholder="Tên của bạn"
          className={style.formInput}
        />
      </div>

      <div className={style.formField}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={style.formInput}
        />

        <input
          type="text"
          name="phone"
          placeholder="Số điện thoại"
          className={style.formInput}
        />
      </div>

      <div className={style.formField}>
        <textarea
          name="content"
          rows="6"
          cols="50"
          placeholder="Nội dung..."
          className={style.formText}
        ></textarea>
      </div>

      <div className={style.formField}>
        <button className={style.formBtn}>Gửi</button>
      </div>
    </form>
  );
};

export default SupportSection;
