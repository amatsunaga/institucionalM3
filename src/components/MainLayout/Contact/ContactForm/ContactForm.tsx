import React from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";

import FormSchema from "../../../../schema/FormSchema";
import { CustomInput } from "../CustomInput/CustomInput";

import styles from "./ContactForm.module.scss";

export interface FormValues {
  name: string;
  email: string;
  cpf: string;
  dateOfBirth: string;
  phoneNumber: string;
  instagram: string;
  acceptedTerms: boolean;
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  dateOfBirth: "",
  phoneNumber: "",
  instagram: "",
  acceptedTerms: false,
};

let clientsList: Array<any> = [];

const ContactForm = () => {
  const handleSubmit = (
    values: FormValues,
    { resetForm, setSubmitting }: FormikHelpers<FormValues>
  ) => {
    console.log(values);
    clientsList.push(values);
    console.log(clientsList);
    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 2000);
  };

  return (
    <div className={styles["form-wrapper"]}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className={styles["form-col"]}>
              <label htmlFor="name">Nome</label>
              <CustomInput
                id="name"
                name="name"
                placeholder="Seu nome completo"
              />
              <ErrorMessage
                component="span"
                name="name"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="email">E-mail</label>
              <CustomInput id="email" name="email" placeholder="Seu e-mail" />
              <ErrorMessage
                component="span"
                name="email"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="cpf">CPF</label>
              <CustomInput
                mask="999.999.999-99"
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="dateOfBirth">Data de Nascimento:</label>
              <CustomInput
                mask={"99.99.9999"}
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="00.00.0000"
              />
              <ErrorMessage
                component="span"
                name="dateOfBirth"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="phoneNumber">Telefone:</label>
              <CustomInput
                mask={"(99) 99999-9999"}
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(00) 00000-0000"
              />
              <ErrorMessage
                component="span"
                name="phoneNumber"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="instagram">Instagram</label>
              <CustomInput
                id="instagram"
                name="instagram"
                placeholder="@seuuser"
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className={styles["invalid-form-feedback"]}
              />
            </div>

            <div className={styles["terms-col"]}>
              <span>* </span>
              <label htmlFor="acceptedTerms">Declaro que li e aceito</label>
              <Field type="checkbox" id="acceptedTerms" name="acceptedTerms" />
            </div>

            <button className={styles["submit-button"]} type="submit">
              Cadastre-se
            </button>

            {isSubmitting && (
              <div className={styles["success-wrapper"]}>
                <span className={styles["success-message"]}>
                  *Formulário enviado com sucesso!
                </span>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ContactForm };
