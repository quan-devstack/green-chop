import style from "./Esclipe.module.scss";

const Esclipe = ({ background, size, position }) => {
  const styles = {
    width: size?.width || "100px",
    height: size?.height || "100px",
    ...position,
  };

  return (
    <div
      style={styles}
      className={`${style.esclipe} ${style[background]}`}
    ></div>
  );
};

export default Esclipe;
