import style from "../../components/NextButton/NextButton.module.scss";
import next_ic from "/icons/next.png";

const NextButton = () => {
  return (
    <button className={style.btn}>
      Xem thêm
      <img src={next_ic} alt="next-ic" />
    </button>
  );
};

export default NextButton;
