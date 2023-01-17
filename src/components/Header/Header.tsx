import React, { useContext } from "react";

import { HeaderDesktop } from "./HeaderDesktop/HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile/HeaderMobile";
import { WidthContext } from "../../contexts/WidthContext";

import styles from "./Header.module.scss";

const Header = () => {
  const { isMobile } = useContext(WidthContext);

  return (
    <>
      {isMobile ? (
        <HeaderMobile
          className={`${styles["container"]} ${styles["header-mobile"]}`}
        />
      ) : (
        <HeaderDesktop
          className={`${styles["container"]} ${styles["header-desktop"]}`}
        />
      )}
    </>
  );
};

export { Header };
