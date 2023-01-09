import React from "react";
import { Link } from "react-router-dom";

import styles from "./SocialMedia.module.scss";

import { ReactComponent as Facebook } from "../../../assets/svg/facebook-icon.svg";
import { ReactComponent as Instagram } from "../../../assets/svg/instagram-icon.svg";
import { ReactComponent as Twitter } from "../../../assets/svg/twitter-icon.svg";
import { ReactComponent as Youtube } from "../../../assets/svg/youtube-icon.svg";
import { ReactComponent as Linkedin } from "../../../assets/svg/linkedin-icon.svg";

const socialMediaLinks = [
  {
    icon: <Facebook />,
    value: "https://facebook.com",
  },
  {
    icon: <Instagram />,
    value: "https://instagram.com",
  },
  {
    icon: <Twitter />,
    value: "https://twitter.com",
  },
  {
    icon: <Youtube />,
    value: "https://youtube.com",
  },
  {
    icon: <Linkedin />,
    value: "https://linkedin.com",
  },
];

const SocialMedia = () => {
  return (
    <>
      <div className={styles["container"]}>
        <ul className={styles["menu-list"]}>
          {socialMediaLinks.map((item, index) => (
            <li key={index}>
              <a href={item.value} target="_blank">{item.icon}</a>
              {/* <Link to={{pathname: item.value}}>{item.icon}</Link> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { SocialMedia };
