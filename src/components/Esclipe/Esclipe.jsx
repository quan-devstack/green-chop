import "./Esclipe.scss";

const Esclipe = ({ background, position }) => {
  return (
    <div
      className={`esclipe esclipe--${background} esclipe--${position}`}
    ></div>
  );
};

export default Esclipe;
