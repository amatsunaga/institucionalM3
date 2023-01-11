import React from "react";

import styles from "./MenuButton.module.scss";

import menuButton from "../assets/menu-icon.svg";

const MenuButton = () => {
  return (
    <button className={styles["open-menu"]}>
        <img src={menuButton} alt="Ícone de menu hambúrguer" />
    </button>
  );
};

export { MenuButton };