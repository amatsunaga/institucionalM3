import React from "react";

import { ReactComponent as Facebook } from "./assets/facebook-icon.svg";
import { ReactComponent as Instagram } from "./assets/instagram-icon.svg";
import { ReactComponent as Twitter } from "./assets/twitter-icon.svg";
import { ReactComponent as Youtube } from "./assets/youtube-icon.svg";
import { ReactComponent as Linkedin } from "./assets/linkedin-icon.svg";

import styles from "./SocialMedia.module.scss";

const socialMediaLinks = [
  {
    icon: <Facebook />,
    value: "https://www.facebook.com/digitalm3",
  },
  {
    icon: <Instagram />,
    value: "https://www.instagram.com/m3.ecommerce",
  },
  {
    icon: <Twitter />,
    value: "https://twitter.com",
  },
  {
    icon: <Youtube />,
    value: "https://www.youtube.com/@m3e-commerce796",
  },
  {
    icon: <Linkedin />,
    value: "https://www.linkedin.com/company/m3ecommerce/",
  },
];

const SocialMedia = () => {
  return (
    <>
      <div className={styles["container"]}>
        <ul className={styles["menu-list"]}>
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <a href={item.value} target="_blank" rel="noreferrer">
                {item.icon}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { SocialMedia };
