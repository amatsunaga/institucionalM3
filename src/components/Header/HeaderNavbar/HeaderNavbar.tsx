import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderNavbar.module.scss";

const navLinks = [
  { name: "Cursos", value: "/" },
  { name: "Saiba Mais", value: "/" },
  { name: "Institucionais", value: "institucionais/sobre" },
];

const HeaderNavbar = () => {
  return (
    <nav className={styles["navbar"]}>
      <ul className={styles["navbar-list"]}>
        {navLinks.map((item, index) => (
          <li key={index} className={styles["navbar-list-item"]}>
            <Link to={item.value}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export { HeaderNavbar };
