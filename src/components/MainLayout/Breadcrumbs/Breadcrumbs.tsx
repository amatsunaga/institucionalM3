import React from "react";
import { Link } from "react-router-dom";

import homeIcon from "./assets/home-icon.svg";
import arrowIcon from "./assets/arrow-icon.svg";

import styles from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  return (
    <div className={styles["breadcrumbs"]}>
      <Link to="/institucionais/contato" className={styles["home-icon"]}>
        <img src={homeIcon} alt="Ícone da Home" />
      </Link>
      <div className={styles["arrow-icon"]}>
        <img src={arrowIcon} alt="Ícone de seta para a direita" />
      </div>
      <Link to="/institucionais/sobre" className={styles["current-location"]}>
        Institucional
      </Link>
    </div>
  );
};

export { Breadcrumbs };
