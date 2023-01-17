import React from "react";

import { Logo } from "../Logo/Logo";
import { Searchbox } from "../Searchbox/Searchbox";
import { LoginButton } from "../LoginButton/LoginButton";
import { Minicart } from "../Minicart/Minicart";
import { HeaderNavbar } from "../HeaderNavbar/HeaderNavbar";

import styles from "./HeaderDesktop.module.scss";
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
      <HeaderNavbar />
    </header>
  );
};

export { HeaderDesktop };
