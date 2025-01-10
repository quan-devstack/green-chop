import style from "./SupportSection.module.scss";

const SupportSection = () => {
  return (
    <form className={style.form}>
      <div className={style.formContent}>
        <span>Bạn có bất kỳ thắc mắc nào.</span>
        <span>Hãy để lại tin nhắn cho chúng tôi nhé!</span>
      </div>

      <div className={style.formGroup}>
        <input type="text" name="name" placeholder="Tên của bạn" />
      </div>

      <div className={style.formGroup}>
        <input type="email" name="email" placeholder="Email" />
        <input type="text" name="phone" placeholder="Số điện thoại" />
      </div>

      <div className={style.formGroup}>
        <textarea
          name="content"
          rows="6"
          cols="50"
          placeholder="Nội dung..."
        ></textarea>
      </div>

      <div className={style.formGroup}>
        <button>Gửi</button>
      </div>
    </form>
  );
};

export default SupportSection;
