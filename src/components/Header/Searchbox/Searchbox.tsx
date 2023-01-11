import { Field, Form, Formik } from "formik";
import FormSchema from "../../../schema/FormSchema";
import searchIcon from "../assets/search-icon.svg";

import styles from "./Searchbox.module.scss";

interface IFormikValues {
  searchInput: string;
}

const initialValues = {
  searchInput: "",
};

const Searchbox = () => {
  const handleSubmit = (values: IFormikValues) => {
    console.log(values);
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={FormSchema}
      >
        {({ errors, touched, resetForm }) => (
          <Form className={styles["searchbox-wrapper"]}>
            <Field
              id="searchInput"
              name="searchInput"
              placeholder="Buscar..."
              // className={errors.name && touched.name && "invalid"}
            />
            <button className={styles["submit-button"]} type="submit">
              <img src={searchIcon} alt="Ícone de busca" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { Searchbox };
