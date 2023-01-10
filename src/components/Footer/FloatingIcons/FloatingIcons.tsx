import React from "react";

import styles from "./FloatingIcons.module.scss";

import whatsapp from "../assets/whatsapp-icon.svg";
import arrowUp from "../assets/arrow-up.svg";
import { Link } from "react-router-dom";

const FloatingIcons = () => {
  return (
    <div className={styles["floating-icons-wrapper"]}>
      <button className={styles["whatsapp-button"]}>
        <a href="web.whatsapp.com">
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
