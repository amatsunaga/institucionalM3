import React from "react";

import styles from "./Footer.module.scss";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { Newsletter } from "./Newsletter/Newsletter";
import { SiteMap } from "./SiteMap/SiteMap";
import { SocialMedia } from "./SocialMedia/SocialMedia";

const Footer = () => {
  return (
    <footer className={styles["container"]}>
      <Newsletter />
      <div className={styles["footer-links"]}>
        <SiteMap />
        <div className={styles["social-links"]}>
          <SocialMedia />
          <p>www.loremipsum.com</p>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export { Footer };
