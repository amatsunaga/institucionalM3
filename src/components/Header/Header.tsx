// import React from "react";

import styles from "./Header.module.scss";

import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";

const Header = () => {
  return (
    <>
      <HeaderMobile className={`${styles["container"]} ${styles["header-mobile"]}`} />
      <HeaderDesktop className={`${styles["container"]} ${styles["header-desktop"]}`} />
    </>
  );
};

export { Header };
