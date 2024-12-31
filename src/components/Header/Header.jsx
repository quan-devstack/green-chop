import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "/images/logo.png";
import cart_ic from "/icons/shopping-cart.png";
import search_ic from "/icons/search.png";

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
                <NavLink
                  to={"/"}
                  end
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Trang chủ
                </NavLink>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Về GreenChop
                </NavLink>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <NavLink
                  to={"/product"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Sản phẩm
                </NavLink>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <NavLink
                  to={"/news"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Tin tức
                </NavLink>
              </li>
              <li className={style.header__wrapper__nav__item}>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) => (isActive ? style.active : "")}
                >
                  Liên hệ
                </NavLink>
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
