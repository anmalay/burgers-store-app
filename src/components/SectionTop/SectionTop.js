import React from "react";

import style from "./SectionTop.module.css";
import { Header } from "../Header/";

export const SectionTop = () => {
  return (
    <React.Fragment>
      <Header />
      <section className={style.wrapper}>
        <div className={style.container}>
          <p className={style.info}>According to a unique recipe</p>
          <h1 className={style.title}>The best burgers in the universe</h1>
          <div className={style.button}>
            <button className={style.btn} type="button">
              Choose
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};
