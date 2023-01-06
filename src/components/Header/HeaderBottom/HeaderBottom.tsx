import React from "react";
import { Link } from "react-router-dom";

import styles from "./HeaderBottom.module.scss";

const navLinks = [
  { name: "Cursos", value: "cursos" },
  { name: "Saiba Mais", value: "saiba-mais" },
  { name: "Institucionais", value: "intitucionais" },
];

const HeaderBottom = () => {
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

export { HeaderBottom };
