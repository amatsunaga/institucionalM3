import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { LocationContext } from "../../../contexts/LocationContext";

import styles from "./MainMenu.module.scss";

const MainMenuItems = [
  {
    name: "Sobre",
    value: "institucionais/sobre",
    className: "sobre",
  },
  {
    name: "Forma de Pagamento",
    value: "institucionais/forma-de-pagamento",
    className: "formaPagamento",
  },
  {
    name: "Entrega",
    value: "institucionais/entrega",
    className: "entrega",
  },
  {
    name: "Troca e Devolução",
    value: "institucionais/troca-e-devolucao",
    className: "trocaDevolucao",
  },
  {
    name: "Segurança e Privacidade",
    value: "institucionais/seguranca-e-privacidade",
    className: "segurancaPrivacidade",
  },
  {
    name: "Contato",
    value: "institucionais/contato",
    className: "contato",
  },
];

const MainMenu = () => {
  const [isActive, setIsActive] = useState({
    sobre: false,
    formaPagamento: false,
    entrega: false,
    trocaDevolucao: false,
    segurancaPrivacidade: false,
    contato: false,
  });

  const { path } = useContext(LocationContext);

  const updateLocation = () => {
    if (path === "/institucionais/sobre") {
      setIsActive({
        sobre: true,
        formaPagamento: false,
        entrega: false,
        trocaDevolucao: false,
        segurancaPrivacidade: false,
        contato: false,
      });
    } else if (path === "/institucionais/forma-de-pagamento") {
      setIsActive({
        sobre: false,
        formaPagamento: true,
        entrega: false,
        trocaDevolucao: false,
        segurancaPrivacidade: false,
        contato: false,
      });
    } else if (path === "/institucionais/entrega") {
      setIsActive({
        sobre: false,
        formaPagamento: false,
        entrega: true,
        trocaDevolucao: false,
        segurancaPrivacidade: false,
        contato: false,
      });
    } else if (path === "/institucionais/troca-e-devolucao") {
      setIsActive({
        sobre: false,
        formaPagamento: false,
        entrega: false,
        trocaDevolucao: true,
        segurancaPrivacidade: false,
        contato: false,
      });
    } else if (path === "/institucionais/seguranca-e-privacidade") {
      setIsActive({
        sobre: false,
        formaPagamento: false,
        entrega: false,
        trocaDevolucao: false,
        segurancaPrivacidade: true,
        contato: false,
      });
    } else if (path === "/institucionais/contato") {
      setIsActive({
        sobre: false,
        formaPagamento: false,
        entrega: false,
        trocaDevolucao: false,
        segurancaPrivacidade: false,
        contato: true,
      });
    }
  };

  useEffect(() => {
    updateLocation();
  }, [path]);

  return (
    <ul className={styles["menu-list"]}>
      {MainMenuItems.map((item, index) => (
        <li
          key={index}
          className={
            Object.values(isActive)[index]
              ? `${item.className} ${styles["active"]}`
              : `${item.className}`
          }
        >
          <Link to={item.value}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export { MainMenu };
