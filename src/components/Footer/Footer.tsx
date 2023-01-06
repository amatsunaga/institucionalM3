import React from "react";

import styles from "./Footer.module.scss";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { Newsletter } from "./Newsletter/Newsletter";
import { SiteMap } from "./SiteMap/SiteMap";


const Footer = () => {
  return (
    <footer className={styles["container"]}>
        <Newsletter />
        <SiteMap />
        <FooterBottom />
    </footer>
  );
};

export { Footer };