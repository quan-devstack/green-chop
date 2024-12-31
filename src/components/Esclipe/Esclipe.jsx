import "./Esclipe.scss";

const Esclipe = ({ background, position, size }) => {
  return (
    <div
      className={`esclipe esclipe--${background} esclipe--${position} esclipe--${size}`}
    ></div>
  );
};

export default Esclipe;
