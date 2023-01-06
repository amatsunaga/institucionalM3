import React from "react";

import styles from "./Newsletter.module.scss";

const Newsletter = () => {
  return (
    <div className={styles["container"]}>
      <h3 className={styles["title"]}>assine nossa newsletter</h3>
      <form className={styles["form-wrapper"]}>
        <input type="email" placeholder="E-mail" />
        <button>ENVIAR</button>
      </form>
    </div>
  );
};

export { Newsletter };
