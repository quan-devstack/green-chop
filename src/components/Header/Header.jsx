import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "/images/logo.png";
import cartIc from "/icons/shopping-cart.png";
import searchIc from "/icons/search.png";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.headerContainer}>
        {/* header-logo */}
        <div className={style.headerLogo}>
          <img src={logo} alt="green-logo" />
        </div>

        {/* header-navbar */}
        <nav className={style.headerNav}>
          {/* nav-item */}
          <div className={style.headerNavItem}>
            <NavLink
              to={"/"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Trang chủ
            </NavLink>
          </div>

          {/* nav-item */}
          <div className={style.headerNavItem}>
            <NavLink
              to={"/about"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Về GreenChop
            </NavLink>
          </div>

          {/* nav-item */}
          <div className={style.headerNavItem}>
            <NavLink
              to={"/product"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Sản phẩm
            </NavLink>
          </div>

          {/* nav-item */}
          <div className={style.headerNavItem}>
            <NavLink
              to={"/news"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Tin tức
            </NavLink>
          </div>

          {/* nav-item */}
          <div className={style.headerNavItem}>
            <NavLink
              to={"/contact"}
              className={({ isActive }) => (isActive ? style.active : "")}
            >
              Liên hệ
            </NavLink>
          </div>

          {/* nav-icon */}
          <div className={style.headerNavIcon}>
            <img src={cartIc} alt="cart-ic" />
          </div>

          {/* nav-icon */}
          <div className={style.headerNavIcon}>
            <img src={searchIc} alt="search-ic" />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
