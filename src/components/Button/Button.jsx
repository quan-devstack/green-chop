import "./Button.scss";

const NextButton = ({ text, className, icon, onClick }) => {
  return (
    <button className={`btn ${className}`} onClick={onClick}>
      {text}
      {icon && <img src={icon} alt="icon" className="btn-ic" />}
    </button>
  );
};

export default NextButton;
