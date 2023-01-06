import React from "react";

import styles from "./Header.module.scss";
import { HeaderBottom } from "./HeaderBottom/HeaderBottom";
import { HeaderTop } from "./HeaderTop/HeaderTop";

const Header = () => {
  return (
    <header className={styles["container"]}>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export { Header };
