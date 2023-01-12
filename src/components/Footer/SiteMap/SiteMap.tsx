import React from "react";
import { Link } from "react-router-dom";

import styles from "./SiteMap.module.scss";

const leftInstitucionalLinks = [
  {
    name: "Quem Somos",
    value: "sobre",
  },
  {
    name: "Política de Privacidade",
    value: "politica-de-privacidade",
  },
  {
    name: "Segurança",
    value: "seguranca-e-privacidade",
  },
  {
    name: "Seja um Revendedor",
    value: "seja-um-revendedor",
  },
];

const duvidasLinks = [
  {
    name: "Entrega",
    value: "entrega",
  },
  {
    name: "Pagamento",
    value: "forma-de-pagamento",
  },
  {
    name: "Trocas e Devoluções",
    value: "troca-e-devolucao",
  },
  {
    name: "Dúvidas Frequentes",
    value: "duvidas-frequentes",
  },
];

const rightInstitucionalLinks = [
  {
    name: "Atendimento ao Consumidor",
    phoneNumber: "(11) 4159 9504",
    value: "atendimento-ao-consumidor",
  },
  {
    name: "Atendimento Online",
    phoneNumber: "(11) 4159 9504",
    value: "politica-de-privacidade",
  },
];

const SiteMap = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["menu-list"]}>
        <div className={styles["subtitle"]}>
          <h4 className={styles["subtitle-text"]}>Institucional</h4>
          <span className={styles["open-icon"]}>+</span>
        </div>
        <div className={styles["list-items"]}>
          {leftInstitucionalLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.value}>{item.name}</Link>
            </li>
          ))}
        </div>
      </ul>

      <ul className={styles["menu-list"]}>
        <div className={styles["subtitle"]}>
          <h4 className={styles["subtitle-text"]}> Dúvidas</h4>
          <span className={styles["open-icon"]}>+</span>
        </div>
        <div className={styles["list-items"]}>
          {duvidasLinks.map((item, index) => (
            <li key={index}>
              <Link to={item.value}>{item.name}</Link>
            </li>
          ))}
        </div>
      </ul>

      <ul className={styles["menu-list"]}>
        <div className={styles["subtitle"]}>
          <h4 className={styles["subtitle-text"]}>Fale Conosco</h4>
          <span className={styles["open-icon"]}>+</span>
        </div>
        <div className={styles["list-items"]}>
          {rightInstitucionalLinks.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <Link to={item.value}>{item.phoneNumber}</Link>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export { SiteMap };
