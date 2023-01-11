import React from "react";
import { Link } from "react-router-dom";

import styles from "./LoginButton.module.scss";

const LoginButton = () => {
  return (
    <Link to="/" className={styles["login-button"]}>
      Entrar
    </Link>
  );
};

export { LoginButton };
