import React from "react";
import { Link } from "react-router-dom";

import styles from "./Logo.module.scss";

import m3Logo from "../assets/m3-logo.svg";

const Logo = () => {
  return (
      <div className={styles["logo-wrapper"]}>
        <Link to="/">
          <img src={m3Logo} alt="Logo da M3" />
        </Link>
      </div>
  );
};

export { Logo };