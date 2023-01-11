import React from "react";

import styles from "./Breadcrumbs.module.scss";

import homeIcon from "./assets/home-icon.svg";
import arrowIcon from "./assets/arrow-icon.svg";

const Breadcrumbs = () => {
  return (
    <div className={styles["breadcrumbs"]}>
      <div className={styles["home-icon"]}>
        <img src={homeIcon} alt="Ícone da Home" />
      </div>
      <div className={styles["arrow-icon"]}>
        <img src={arrowIcon} alt="Ícone de seta para a direita" />
      </div>
      <p className={styles["current-location"]}>Institucional</p>
    </div>
  );
};

export { Breadcrumbs };
