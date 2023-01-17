import React, { useState, useContext } from "react";

import { List } from "../../List/List";
import { WidthContext } from "../../../contexts/WidthContext";

import styles from "./SiteMap.module.scss";

const institucionalLinks = [
  {
    name: "Quem Somos",
    value: "institucionais/sobre",
  },
  {
    name: "Política de Privacidade",
    value: "institucionais/seguranca-e-privacidade",
  },
  {
    name: "Segurança",
    value: "institucionais/seguranca-e-privacidade",
  },
  {
    name: "Seja um Revendedor",
    value: "institucionais/contato",
  },
];

const duvidasLinks = [
  {
    name: "Entrega",
    value: "institucionais/entrega",
  },
  {
    name: "Pagamento",
    value: "institucionais/forma-de-pagamento",
  },
  {
    name: "Trocas e Devoluções",
    value: "institucionais/troca-e-devolucao",
  },
  {
    name: "Dúvidas Frequentes",
    value: "institucionais/troca-e-devolucao",
  },
];

const faleConoscoLinks = [
  {
    name: "Atendimento ao Consumidor",
    phoneNumber: "+1141599504",
    value: "(11) 4159 9504",
  },
  {
    name: "Atendimento Online",
    phoneNumber: "+1141599504",
    value: "(11) 4159 9504",
  },
];

const SiteMap = () => {
  const { isMobile } = useContext(WidthContext);

  const [isActive, setIsActive] = useState({
    institucional: false,
    duvidas: false,
    faleConosco: false,
  });

  const handleClick = (e: React.MouseEvent<HTMLHeadingElement, MouseEvent>) => {
    const element = e.target as HTMLElement;

    if (element.classList.contains("institucional")) {
      setIsActive((prevState) => ({
        ...prevState,
        institucional: !isActive.institucional,
      }));
    } else if (element.classList.contains("duvidas")) {
      setIsActive((prevState) => ({
        ...prevState,
        duvidas: !isActive.duvidas,
      }));
    } else if (element.classList.contains("faleConosco")) {
      setIsActive((prevState) => ({
        ...prevState,
        faleConosco: !isActive.faleConosco,
      }));
    }
  };

  return (
    <nav className={styles["container"]}>
      <ul className={styles["submenu"]}>
        <div className={styles["subtitle"]}>
          <h4
            className={
              isActive.institucional
                ? `${styles["subtitle-text"]} ${styles["active"]} institucional`
                : `${styles["subtitle-text"]} institucional`
            }
            onClick={handleClick}
          >
            Institucional
          </h4>
          <span
            className={
              isActive.institucional
                ? `${styles["open-icon"]} ${styles["active"]} institucional`
                : `${styles["open-icon"]} institucional`
            }
            onClick={handleClick}
          ></span>
        </div>
        {isMobile ? (
          isActive.institucional && (
            <List
              className={styles["list-items"]}
              itemsList={institucionalLinks}
            />
          )
        ) : (
          <List
            className={styles["list-items"]}
            itemsList={institucionalLinks}
          />
        )}
      </ul>

      <ul className={styles["submenu"]}>
        <div className={styles["subtitle"]}>
          <h4
            className={
              isActive.duvidas
                ? `${styles["subtitle-text"]} duvidas ${styles["active"]}`
                : `${styles["subtitle-text"]} duvidas`
            }
            onClick={handleClick}
          >
            Dúvidas
          </h4>
          <span
            className={
              isActive.duvidas
                ? `${styles["open-icon"]} ${styles["active"]} duvidas`
                : `${styles["open-icon"]} duvidas`
            }
            onClick={handleClick}
          ></span>
        </div>
        {isMobile ? (
          isActive.duvidas && (
            <List className={styles["list-items"]} itemsList={duvidasLinks} />
          )
        ) : (
          <List className={styles["list-items"]} itemsList={duvidasLinks} />
        )}
      </ul>

      <ul className={styles["submenu"]}>
        <div className={styles["subtitle"]}>
          <h4
            className={
              isActive.faleConosco
                ? `${styles["subtitle-text"]} faleConosco ${styles["active"]}`
                : `${styles["subtitle-text"]} faleConosco`
            }
            onClick={handleClick}
          >
            Fale Conosco
          </h4>
          <span
            className={
              isActive.faleConosco
                ? `${styles["open-icon"]} ${styles["active"]} faleConosco`
                : `${styles["open-icon"]} faleConosco`
            }
            onClick={handleClick}
          ></span>
        </div>
        {isMobile ? (
          isActive.faleConosco && (
            <List
              className={styles["list-items"]}
              itemsList={faleConoscoLinks}
            />
          )
        ) : (
          <List className={styles["list-items"]} itemsList={faleConoscoLinks} />
        )}
      </ul>
    </nav>
  );
};

export { SiteMap };
