import React from "react";

import styles from "./FooterBottom.module.scss";

import Master from "../assets/Master.svg";
import Visa from "../assets/Visa.svg";
import Amex from "../assets/Diners.svg";
import Elo from "../assets/Elo.svg";
import Hipercard from "../assets/Hiper.svg";
import Paypal from "../assets/Pagseguro.svg";
import Boleto from "../assets/Boleto.svg";
import PCI from "../assets/vtex-pci-200.svg";
import VtexIcon from "../assets/vtex-icon.svg";
import M3Icon from "../assets/m3-icon.svg";

// import { ReactComponent as Master } from "../assets/Master.svg";
// import { ReactComponent as Visa } from "../assets/Visa.svg";
// import { ReactComponent as Amex } from "../assets/Diners.svg";
// import { ReactComponent as Elo } from "../assets/Elo.svg";
// import { ReactComponent as Hipercard } from "../assets/Hiper.svg";
// import { ReactComponent as Paypal } from "../assets/Pagseguro.svg";
// import { ReactComponent as Boleto } from "../assets/Boleto.svg";
// import { ReactComponent as PCI } from "../assets/vtex-pci-200.svg";
// import { ReactComponent as VtexIcon } from "../assets/vtex-icon.svg";
// import { ReactComponent as M3Icon } from "../assets/m3-icon.svg";

const PaymentSolutions = [
  {
    src: Master,
    alt: "Logo da Mastercard",
  },
  {
    src: Visa,
    alt: "Logo da Visa",
  },
  {
    src: Amex,
    alt: "Logo da American Express",
  },
  {
    src: Elo,
    alt: "Logo da Elo",
  },
  {
    src: Hipercard,
    alt: "Logo da Hipercard",
  },
  {
    src: Paypal,
    alt: "Logo da PayPal",
  },
  {
    src: Boleto,
    alt: "Ícone de boleto",
  },
];

const FooterBottom = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["address"]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing</p>
        <span>elit, sed do eiusmod tempor</span>
      </div>
      <div className={styles["payment-solutions"]}>
        <ul className={styles["menu-list"]}>
          {PaymentSolutions.map((item, index) => (
            <li key={index}>
              <img src={item.src} alt={item.alt} />
            </li>
          ))}
        </ul>
        <span></span>
        <img src={PCI} alt="Ícone de Certificado PCI 200" />
      </div>
      <div className={styles["authors"]}>
        <p>Powered by</p>
        <img src={VtexIcon} alt="Logo da VTEX" className={styles["vtex-icon"]} />
        <p>Developed by</p>
        <img src={M3Icon} alt="Logo da M3" className={styles["m3-icon"]}/>
      </div>
    </div>
  );
};

export { FooterBottom };
