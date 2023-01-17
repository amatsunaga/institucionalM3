import React from "react";
import { Link } from "react-router-dom";

import whatsapp from "./assets/whatsapp-icon.svg";
import arrowUp from "./assets/arrow-up.svg";

import styles from "./FloatingIcons.module.scss";

const FloatingIcons = () => {
  return (
    <div className={styles["floating-icons-wrapper"]}>
      <button className={styles["whatsapp-button"]}>
        <a href="https://wa.me/551141599504" target="blank">
          <img src={whatsapp} alt="Ícone do WhatsApp" />
        </a>
      </button>
      <button className={styles["up-button"]}>
        <Link to="sobre">
          <img src={arrowUp} alt="Seta para cima" />
        </Link>
      </button>
    </div>
  );
};

export { FloatingIcons };
