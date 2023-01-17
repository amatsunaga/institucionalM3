import React from "react";

import { ContactForm } from "./ContactForm/ContactForm";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles["section-container"]}>
      <h2 className={styles["section-title"]}>Preencha o formulário </h2>
      <ContactForm />
    </section>
  );
};

export { Contact };
