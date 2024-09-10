import { object, string } from "yup";

export const ResetPassFormSchema = object({
  email: string().email("Email invalide").required("Veuillez remplir ce champ"),
});
