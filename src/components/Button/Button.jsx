import styles from "./Button.module.scss";

const NextButton = ({ text, custom, onClick }) => {
  const inline = {
    width: custom.width,
    margin: custom.margin,
  };

  return (
    <button style={inline} className={styles.btn2} onClick={onClick}>
      {text}
    </button>
  );
};

export default NextButton;
