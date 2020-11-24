import React from "react";

import style from "./Header.module.css";
import logo from "./img/hamburger.svg";

export const Header = () => {
  return (
    <header className={style.wrapper}>
      <div className={style.container}>
        <div className={style.start}>
          <div className={style.logo}>
            <img className={style.logo} src={logo} alt="" width="60px" />
          </div>
        </div>
        <div className={style.end}>
          <nav className={style.nav}>
            <ul className={style.ul}>
              <li className={style.li}>
                <a href="#" className={style.link}>
                  Burgers
                </a>
              </li>
              <li className={style.li}>
                <a href="#" className={style.link}>
                  About us
                </a>
              </li>
              <li className={style.li}>
                <a href="#" className={style.link}>
                  Contacts
                </a>
              </li>
            </ul>
          </nav>
          <div className={style.phone}>
            <a href="tel:+19999999999" className={style.phone__item}>
              +1 (999) 999-99-99
            </a>
          </div>
          <div className={style.hamburger}>
            <button className={style.btn_menu} type="button">
              <span className={style.btn_menu__box}>
                <span className={style.btn_menu__inner}></span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
