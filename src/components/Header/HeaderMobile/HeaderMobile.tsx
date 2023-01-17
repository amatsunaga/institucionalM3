import React from "react";

import { MenuButton } from "../MenuButton/MenuButton";
import { Logo } from "../Logo/Logo";
import { Minicart } from "../Minicart/Minicart";
import { Searchbox } from "../Searchbox/Searchbox";

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
