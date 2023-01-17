import React from "react";
import { Link } from "react-router-dom";

import m3Logo from "../assets/m3-logo.svg";

import styles from "./Logo.module.scss";

const Logo = () => {
  return (
      <div className={styles["logo-wrapper"]}>
        <Link to="/institucionais/sobre">
          <img src={m3Logo} alt="Logo da M3" />
        </Link>
      </div>
  );
};

export { Logo };