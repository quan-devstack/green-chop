import "./Esclipe.scss";

const Esclipe = ({ background, size, position }) => {
  const styles = {
    width: size?.width || "100px",
    height: size?.height || "100px",
    ...position,
  };

  return (
    <div style={styles} className={`esclipe esclipe--${background}`}></div>
  );
};

export default Esclipe;
