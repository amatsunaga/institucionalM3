import React, { useContext } from "react";

import { ModalContext } from "../../../contexts/ModalContext";
import menuButton from "../assets/menu-icon.svg";

import styles from "./MenuButton.module.scss";

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
