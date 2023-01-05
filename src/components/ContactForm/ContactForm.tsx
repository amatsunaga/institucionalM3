import React, { useCallback, useState } from "react";
import {
  Formik,
  Form,
  Field,
  ErrorMessage,
//   FormikHelpers,
//   FormikBag,
//   FormikState,
} from "formik";
import FormSchema from "../../schema/FormSchema";
import "./ContactForm.module.scss";

import styles from "./ContactForm.module.scss";

interface IFormikValues {
  name: string;
  email: string;
  cpf: string;
  dateOfBirth: string;
  phoneNumber: string;
  instagram: string;
  acceptTerms: boolean;
}

const initialValues = {
  name: "",
  email: "",
  cpf: "",
  dateOfBirth: "",
  phoneNumber: "",
  instagram: "",
  acceptTerms: false,
};

const ContactForm = () => {
  const [hasSubmitBegun, setHasSubmitBegun] = useState(false);
  const [hasSubmitCompleted, setHasSubmitCompleted] = useState(false);

  const doSubmit = async (values: IFormikValues) =>
    console.log("submitted", values);

  const handleSubmit = useCallback(
    async (values: IFormikValues, { resetForm }: any) => {
      setHasSubmitBegun(true);

      await doSubmit(values);

      setHasSubmitCompleted(true);
      resetForm({ ...initialValues });
    },
    [doSubmit]
  );

  // const handleSubmit = (values: IFormikValues) => {
  //   console.log(values);
  // };

  return (
    <div className={styles["form-wrapper"]}>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className={styles["form-col"]}>
              <label htmlFor="name">Nome</label>
              <Field
                id="name"
                name="name"
                placeholder="Seu nome completo"
                // className={errors.name && touched.name && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="name"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="email">E-mail</label>
              <Field
                id="email"
                name="email"
                placeholder="Seu e-mail"
                // className={errors.email && touched.email && `${styles["invalid"]}`}
                // className={errors.email && touched.email && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="email"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="subject">CPF</label>
              <Field
                id="cpf"
                name="cpf"
                placeholder="000.000.000-00"
                // className={errors.cpf && touched.cpf && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="cpf"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="dateOfBirth">Data de Nascimento:</label>
              {/* tem : só nesses campos? */}
              <Field
                // as="textarea"
                id="dateOfBirth"
                name="dateOfBirth"
                placeholder="00.00.0000"
                // className={errors.dateOfBirth && touched.dateOfBirth && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="dateOfBirth"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="message">Telefone:</label>
              {/* tem : só nesses campos? */}
              <Field
                // as="textarea"
                id="phoneNumber"
                name="phoneNumber"
                placeholder="(00) 00000-0000"
                // className={
                //   errors.phoneNumber && touched.phoneNumber && "invalid"
                // }
              />
              <ErrorMessage
                component="span"
                name="phoneNumber"
                className={styles["invalid-form-feedback"]}
              />
            </div>
            <div className={styles["form-col"]}>
              <label htmlFor="message">Instagram</label>
              <Field
                id="instagram"
                name="instagram"
                placeholder="@seuuser"
                // className={errors.instagram && touched.instagram && "invalid"}
              />
              <ErrorMessage
                component="span"
                name="instagram"
                className={styles["invalid-form-feedback"]}
              />
            </div>

            <div className={styles["terms-col"]}>
              <span>* </span>
              <label htmlFor="acceptTerms">Declaro que li e aceito</label>
              {/* <div className={styles["custom-checkbox"]}></div> */}
              <Field
                type="checkbox"
                id="acceptTerms"
                name="acceptTerms"
                // className={`${"invalid" ? styles["invalid"] : ""}`}
                // className={
                //   errors.acceptTerms && touched.acceptTerms && "invalid"
                // }
              />
              {/* <ErrorMessage
                component="span"
                name="acceptTerms"
                className={styles["invalid-form-feedback"]}
              /> */}
            </div>

            <button className={styles["submit-button"]} type="submit">
              Cadastre-se
            </button>
            
            {hasSubmitCompleted && (
              <span className={styles["success-message"]}>*Formulário enviado com sucesso!</span>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export { ContactForm };
