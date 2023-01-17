import * as Yup from "yup";

export default Yup.object().shape({
  searchInput: Yup.string().required(),
});
