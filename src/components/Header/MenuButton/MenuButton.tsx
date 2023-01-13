import React, { useContext } from "react";

import styles from "./MenuButton.module.scss";

import menuButton from "../assets/menu-icon.svg";
import { ModalContext } from "../../../contexts/ModalContext";

// const openMenu = () => {};

const MenuButton = () => {

  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <>
      <button className={styles["open-menu"]} onClick={() => setIsOpen(true)}>
        <img src={menuButton} alt="Ícone de menu hambúrguer" />
      </button>
    </>
  );
};

export { MenuButton };
