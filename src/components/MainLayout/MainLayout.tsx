import React from "react";
import { Outlet } from "react-router-dom";
import { AsideMenu } from "../AsideMenu/AsideMenu";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <main className={styles["main-container"]}>
      <h1 className={styles["main-title"]}>Institucional</h1>
      <div className={styles["main-content"]}>
        <AsideMenu />
        <Outlet />
      </div>
    </main>
  );
};

export { MainLayout };
