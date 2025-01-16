import { useNavigate } from "react-router-dom";
import Button from "../../Button/Button";
import style from "./ConfirmPopUp.module.scss";
import confirm from "/public/images/confirm.png";

const ConfirmPopUp = ({ setOpenPopUp, title }) => {
  const nav = useNavigate();

  return (
    <div className={style.confirmPopUp}>
      <div className={style.overlay} onClick={() => setOpenPopUp(false)}></div>
      <div className={style.layout}>
        <img src={confirm} alt="image" className={style.image} />
        <h1 className={style.title}>{title}</h1>
        <p className={style.desc}>
          Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper
          suscipit lobortis nisl ut aliquip ex ea commodo consequa
        </p>
        <Button
          text={"Quay về trang chủ"}
          custom={{ width: "200px", margin: "10px auto" }}
          onClick={() => nav("/")}
        />
      </div>
    </div>
  );
};

export default ConfirmPopUp;
