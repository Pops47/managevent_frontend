import { object, ref, string } from "yup";

export const NewPasswordFormSchema = object({
  password: string()
    .required("Veuillez remplir ce champ")
    .min(8, "Le mot de passe doit faire au moins 8 caractères"),
  confirmPassword: string()
    .required("Veuillez remplir ce champ")
    .oneOf([ref("password")], "Les mots de passe ne correspondent pas"),
});
