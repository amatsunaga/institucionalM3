import React from "react";

import styles from "./HeaderDesktop.module.scss";

import { HeaderBottom } from "../HeaderBottom/HeaderBottom";
import { Logo } from "../Logo/Logo";
import { Searchbox } from "../Searchbox/Searchbox";
import { LoginButton } from "../LoginButton/LoginButton";
import { Minicart } from "../Minicart/Minicart";

interface HeaderDesktopProps {
  className: string;
}

const HeaderDesktop = (props: HeaderDesktopProps) => {
  const { className } = props;

  return (
    <header className={className}>
      <div className={styles["header-top"]}>
        <Logo />
        <Searchbox />
        <div className={styles["login-cart-wrapper"]}>
          <LoginButton />
          <Minicart />
        </div>
      </div>
      <HeaderBottom />
    </header>
  );
};

export { HeaderDesktop };
