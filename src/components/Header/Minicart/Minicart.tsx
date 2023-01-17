import React from "react";
import { Link } from "react-router-dom";

import styles from "./Minicart.module.scss";

import minicart from "./assets/cart-icon.svg";

const Minicart = () => {
  return (
    <Link to="/" className={styles["cart-icon"]}>
      <img
        src={minicart}
        alt="Carrinho de compras"
      />
    </Link>
  );
};

export { Minicart };
