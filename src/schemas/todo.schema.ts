import * as Yup from "yup";

export const TodoSchema = Yup.object().shape({
  title: Yup.string()
    .trim("não pode conter espaços no início ou no fim")
    .strict(true)
    .min(2, "titulo muito curto!")
    .max(50, "titulo muito longo!")

    .required("titulo é obrigatório"),
  description: Yup.string()
    .trim("não pode conter espaços no início ou no fim")
    .strict(true)
    .min(6, "descrição muito curta!")
    .max(200, "descrição muito longa!")
    .required("descrição é obrigatória"),
});
