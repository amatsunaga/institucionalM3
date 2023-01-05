import React from "react";
import { Outlet } from "react-router-dom";
import { AsideMenu } from "../AsideMenu/AsideMenu";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <main className={styles["main-container"]}>
      <div className={styles["breadcrumbs"]}>
        <div className={styles["home-icon"]}></div>
        <div className={styles["arrow-icon"]}></div>
        <p className={styles["current-location"]}>Institucional</p>
      </div>
      <h1 className={styles["main-title"]}>Institucional</h1>
      <div className={styles["main-content"]}>
        <AsideMenu />
        <div className={styles["horizontal-divider"]}></div>
        <Outlet />
      </div>
    </main>
  );
};

export { MainLayout };
