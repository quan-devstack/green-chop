import style from "./NextButton.module.scss";
import nextIc from "/icons/next.png";

const NextButton = () => {
  return (
    <button className={style.btn}>
      Xem thêm
      <img src={nextIc} alt="next-ic" />
    </button>
  );
};

export default NextButton;
