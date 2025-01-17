import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";
import logo from "/images/logo.png";
import cartIc from "/icons/cart-ic.svg";
import searchIc from "/icons/search-ic.svg";

const Header = () => {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.layout}>
          {/* logo */}
          <img src={logo} alt="green-logo" className={style.logo} />

          {/* nav-bar */}
          <nav className={style.navBar}>
            {/* nav-item */}
            <div className={style.navItem}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
              >
                Trang chủ
              </NavLink>
            </div>

            {/* nav-item */}
            <div className={style.navItem}>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
              >
                Về GreenChop
              </NavLink>
            </div>

            {/* nav-item */}
            <div className={style.navItem}>
              <NavLink
                to={"/product"}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
              >
                Sản Phẩm
              </NavLink>
            </div>

            {/* nav-item */}
            <div className={style.navItem}>
              <NavLink
                to={"/news"}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
              >
                Tin Tức
              </NavLink>
            </div>

            {/* nav-item */}
            <div className={style.navItem}>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : ""
                }
              >
                Liên Hệ
              </NavLink>
            </div>

            {/* nav-icon */}
            <div className={style.navIcon}>
              <NavLink to={"/product/cart"}>
                <img src={cartIc} alt="cart-ic" />
              </NavLink>
            </div>

            {/* nav-icon */}
            <div className={style.navIcon}>
              <img src={searchIc} alt="search-ic" />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
