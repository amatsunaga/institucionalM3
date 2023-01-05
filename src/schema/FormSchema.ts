import * as Yup from "yup";

export default Yup.object().shape({
  // melhorar validações: tipo de dado, minlength, formato
  name: Yup.string().required("*Campo Obrigatório"),
  email: Yup.string().required("*Campo Obrigatório").email("Email inválido"),
  cpf: Yup.string().required("*Campo Obrigatório"),
  dateOfBirth: Yup.string().required("*Campo Obrigatório"),
  phoneNumber: Yup.string().required("*Campo Obrigatório"),
  instagram: Yup.string(),
  acceptTerms: Yup.boolean().required("*Campo Obrigatório"),
});
