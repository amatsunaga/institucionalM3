import { Field, Form, Formik, FormikHelpers } from "formik";
import SearchboxSchema from "../../../schema/SearchboxSchema";
import searchIcon from "../assets/search-icon.svg";

import styles from "./Searchbox.module.scss";

interface FormValues {
  searchInput: string;
}

const initialValues = {
  searchInput: "",
};

const Searchbox = () => {
  const handleSubmit = (values: FormValues, { resetForm }: FormikHelpers<FormValues>) => {
    console.log(values);
    resetForm();
  };

  return (
    <>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={SearchboxSchema}
      >
        {({ resetForm }) => (
          <Form className={styles["searchbox-wrapper"]}>
            <Field
              id="searchInput"
              name="searchInput"
              placeholder="Buscar..."
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
