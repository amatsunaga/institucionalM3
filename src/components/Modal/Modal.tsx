import React from "react";

import { LoginButton } from "../Header/LoginButton/LoginButton";
import { List } from "../List/List";

import closeIcon from "./assets/close-icon.svg";

import styles from "./Modal.module.scss";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
  { name: "Cursos", value: "cursos" },
  { name: "Saiba Mais", value: "saiba-mais" },
  { name: "Institucionais", value: "intitucionais" },
];

const Modal = ({ isOpen, setIsOpen }: ModalProps) => {
  return (
    <div
      className={`${styles["modal-wrapper"]} ${
        isOpen ? `${styles["opened"]}` : ""
      }`}
    >
      <div className={styles["modal-content"]}>
        <div className={styles["modal-header"]}>
          <LoginButton />
          <img
            src={closeIcon}
            alt="Ícone de fechar modal"
            onClick={() => setIsOpen(false)}
          />
        </div>
        <nav className={styles["navbar"]}>
          <List className={styles["navbar-list"]} itemsList={navLinks} />
        </nav>
      </div>
      <div
        className={styles["modal-overlay"]}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export { Modal };
