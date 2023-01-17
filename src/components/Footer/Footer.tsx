import React from "react";

import { FloatingIcons } from "./FloatingIcons/FloatingIcons";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { Newsletter } from "./Newsletter/Newsletter";
import { SiteMap } from "./SiteMap/SiteMap";
import { SocialMedia } from "./SocialMedia/SocialMedia";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles["container"]}>
      <Newsletter />
      <div className={styles["footer-links"]}>
        <SiteMap />
        <div className={styles["social-links"]}>
          <SocialMedia />
          <a href="https://m3ecommerce.com/">www.loremipsum.com</a>
        </div>
        <FloatingIcons />
      </div>
      <FooterBottom />
    </footer>
  );
};

export { Footer };
