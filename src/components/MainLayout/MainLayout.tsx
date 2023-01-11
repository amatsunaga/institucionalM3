import React from "react";
import { Outlet } from "react-router-dom";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main className={styles["main-container"]}>
        <Breadcrumbs />
        <h1 className={styles["main-title"]}>Institucional</h1>
        <div className={styles["main-content"]}>
          <AsideMenu />
          <div className={styles["vertical-divider"]}></div>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export { MainLayout };
