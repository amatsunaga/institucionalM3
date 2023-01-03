import React from "react";
import { Link } from "react-router-dom";

import styles from "./AsideMenu.module.scss";

const AsideMenu = () => {
  const AsideMenuItems = [
    {
      name: "Sobre",
      value: "sobre",
    },
    {
      name: "Forma de Pagamento",
      value: "forma-de-pagamento",
    },
    {
      name: "Entrega",
      value: "entrega",
    },
    {
      name: "Troca e Devolução",
      value: "troca-e-devolucao",
    },
    {
      name: "Segurança e Privacidade",
      value: "seguranca-e-privacidade",
    },
    {
      name: "Contato",
      value: "contato",
    },
  ];

  return (
    <ul className={styles["menu-list"]}>
      {AsideMenuItems.map((item, index) => (
        <li key={index}>
          <Link to={item.value}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export { AsideMenu };