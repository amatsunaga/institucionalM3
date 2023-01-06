import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderTop.module.scss";

const HeaderTop = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo-wrapper"]}>
        <Link to="/">
          <img
            src={require("../../../assets/img/m3-logo.png")}
            alt="Logo da M3"
            className={styles["logo-image"]}
          />
        </Link>
      </div>
      <div className={styles["searchbox-wrapper"]}>
        <input type="text" placeholder="Buscar..." className={styles["searchbox-entry"]} />
        <button type="submit" className={styles["searchbox-button"]}></button>
      </div>
      <div className={styles["login-cart-wrapper"]}>
        <Link to="/" className={styles["login-button"]}>Entrar</Link>
        <Link to="/" className={styles["cart-icon"]}>
          <img src={require("../../../assets/img/cart-icon.png")} alt="Carrinho de compras" />
        </Link>
      </div>
    </div>
  );
};

export { HeaderTop };
