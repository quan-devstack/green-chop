import { Link } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "../../assets/images/logo.png";
import cart_ic from "../../assets/icons/shopping-cart.png";
import search_ic from "../../assets/icons/search.png";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.header__container}>
        <div className={style.header__wrapper}>
          <div className={style.header__wrapper__logo}>
            <img src={logo} alt="green-logo" />
          </div>
          <nav className={style.header__wrapper__nav}>
            <ul>
              <li className={style.header__wrapper__nav__item}>
                <Link to={"/"}>Trang chủ</Link>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <Link to={"/about"}>Về GreenChop</Link>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <Link to={"/product"}>Sản phẩm</Link>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <Link to={"/news"}>Tin tức</Link>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <Link to={"/contact"}>Liên hệ</Link>
              </li>
              <div className={style.header__wrapper__nav__ic}>
                <img src={cart_ic} alt="cart-ic" />
              </div>
              <div className={style.header__wrapper__nav__ic}>
                <img src={search_ic} alt="search-ic" />
              </div>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
