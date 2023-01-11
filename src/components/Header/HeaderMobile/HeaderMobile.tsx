import React from "react";
import { Searchbox } from "../Searchbox/Searchbox";
import { Logo } from "../Logo/Logo";
import { MenuButton } from "../MenuButton/MenuButton";
import { Minicart } from "../Minicart/Minicart";

import styles from "./HeaderMobile.module.scss";

interface HeaderMobileProps {
  className: string;
}

const HeaderMobile = (props: HeaderMobileProps) => {
  const { className } = props;

  return (
    <header className={className}>
      <div className={styles["header-top"]}>
        <MenuButton />
        <Logo />
        <Minicart />
      </div>
      <div className={styles["header-bottom"]}>
        <Searchbox />
      </div>
    </header>
  );
};

export { HeaderMobile };
