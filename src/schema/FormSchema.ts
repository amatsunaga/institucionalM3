import * as Yup from "yup";
import { parse, isDate } from "date-fns";

const cpfRegex = /^\d{3}[.]?\d{3}[.]?\d{3}[-]?\d{2}$/;
const phoneRegex = /^\(?([0-9]{2})\)?[ ]?([0-9]{5})[-]?([0-9]{4})$/;
const instagramRegex = /^[@]/;

const today = new Date();

function parseDateString(value: any, originalValue: any) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "dd.MM.yyyy", new Date());

  return parsedDate;
}

export default Yup.object().shape({
  name: Yup.string().min(2, "*Nome inválido").required("*Campo Obrigatório"),
  email: Yup.string().email("*Email inválido").required("*Campo Obrigatório"),
  cpf: Yup.string()
    .matches(cpfRegex, "*CPF inválido")
    .required("*Campo Obrigatório"),
  dateOfBirth: Yup.date()
    .transform(parseDateString)
    .max(today, "*Data de nascimento inválida")
    .required("*Campo Obrigatório")
    .typeError("*Data de nascimento inválida"),
  phoneNumber: Yup.string()
    .matches(phoneRegex, "*Telefone inválido")
    .required("*Campo Obrigatório"),
  instagram: Yup.string().matches(instagramRegex, "*Instagram inválido"),
  acceptedTerms: Yup.boolean().required().oneOf([true]),
});
