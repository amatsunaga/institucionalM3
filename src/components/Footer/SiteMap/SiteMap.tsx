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
  // {
  //   name: "Segurança",
  //   value: "seguranca-e-privacidade",
  // },
  // {
  //   name: "Seja um Revendedor",
  //   value: "seja-um-revendedor",
  // },
];

const SiteMap = () => {
  return (
    <div className={styles["container"]}>
      <ul className={styles["menu-list"]}>
        <h4 className={styles["subtitle"]}>Institucional
        </h4>
        {leftInstitucionalLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.value}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ul className={styles["menu-list"]}>
        <h4 className={styles["subtitle"]}>Dúvidas</h4>
        {duvidasLinks.map((item, index) => (
          <li key={index}>
            <Link to={item.value}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <ul className={styles["menu-list"]}>
        <h4 className={styles["subtitle"]}>FALE CONOSCO</h4>
        {rightInstitucionalLinks.map((item, index) => (
          <li key={index}>
            <p>{item.name}</p>
            <Link to={item.value}>{item.phoneNumber}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { SiteMap };

// const AsideMenu = () => {

//   return (
//     <ul className={styles["menu-list"]}>
//       {AsideMenuItems.map((item, index) => (
//         <li key={index}>
//           <Link to={item.value}>{item.name}</Link>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export { AsideMenu };
