import * as Yup from "yup";

export const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "titulo muito curto!")
    .max(50, "titulo muito longo!")
    .required("titulo é obrigatório")
    .trim("não pode conter espaços no início ou no fim"),
  description: Yup.string()
    .min(6, "descrição muito curta!")
    .max(200, "descrição muito longa!")
    .required("descrição é obrigatória")
    .trim("não pode conter espaços no início ou no fim"),
});
