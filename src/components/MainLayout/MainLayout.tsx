import React, { useContext } from "react";
import { Outlet } from "react-router-dom";

import { LocationProvider } from "../../contexts/LocationContext";
import { ModalContext } from "../../contexts/ModalContext";
import { MainMenu } from "./MainMenu/MainMenu";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Modal } from "../Modal/Modal";
import { Breadcrumbs } from "./Breadcrumbs/Breadcrumbs";

import styles from "./MainLayout.module.scss";

const MainLayout = () => {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <>
      <LocationProvider>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        <Header />
        <main className={styles["main-container"]}>
          <Breadcrumbs />
          <h1 className={styles["main-title"]}>Institucional</h1>
          <div className={styles["main-content"]}>
            <MainMenu />
            <div className={styles["vertical-divider"]}></div>
            <Outlet />
          </div>
        </main>
        <Footer />
      </LocationProvider>
    </>
  );
};

export { MainLayout };
