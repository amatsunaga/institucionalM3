import React from "react";
import { Form } from "react-router-dom";
import { Formik, FormikHelpers } from "formik";

import NewsletterSchema from "../../../schema/NewsletterSchema";

import styles from "./Newsletter.module.scss";
interface FormValues {
  email: string;
}

const initialValues = {
  email: "",
};

const newsletterList: Array<any> = [];

const Newsletter = () => {
  const handleSubmit = (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    newsletterList.push(values);
    console.log(newsletterList);
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={NewsletterSchema}
      >
        {({ resetForm }) => (
          <div className={styles["container"]}>
            <h3 className={styles["title"]}>ASSINE NOSSA NEWSLETTER</h3>
            <Form className={styles["form-wrapper"]}>
              <input type="email" placeholder="E-mail" />
              <button>ENVIAR</button>
            </Form>
          </div>
        )}
      </Formik>
    </>
  );
};

export { Newsletter };
