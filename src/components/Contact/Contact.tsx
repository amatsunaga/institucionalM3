import React from "react";
import { ContactForm } from "../ContactForm/ContactForm";
// import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
// import FormSchema from "../../schema/FormSchema";

import styles from "./Contact.module.scss";

const Contact = () => {
  return (
    <section className={styles["section-container"]}>
      <h2 className={styles["section-title"]}>Preencha o formulário </h2>
      {/* <div className={styles["section-description"]}></div> */}
      <ContactForm />
    </section>
  );
};

export { Contact };
