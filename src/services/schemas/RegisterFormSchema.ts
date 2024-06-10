import { object, ref, string } from "yup";

export const RegisterFormSchema = object({
  email: string()
    .required("L'email est requis")
    .email("L'email n'est pas valide"),
  password: string()
    .required("Le mot de passe est requis")
    .min(8, "Le mot de passe doit contenir au moins 8 caractères")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Le mot de passe doit contenir au moins une minuscule"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Le mot de passe doit contenir au moins une majuscule"
    )
    .matches(
      RegExp("(.*\\d.*)"),
      "Le mot de passe doit contenir au moins un chiffre"
    )
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      "Le mot de passe doit contenir au moins un caractère special"
    ),
  confirmPassword: string()
    .required("La confirmation du mot de passe est requise")
    .matches(
      RegExp("(.*[a-z].*)"),
      "Le mot de passe doit contenir au moins une minuscule"
    )
    .matches(
      RegExp("(.*[A-Z].*)"),
      "Votre mot de passe doit contenir au moins une majuscule"
    )
    .matches(
      RegExp("(.*\\d.*)"),
      "Votre mot de passe doit contenir au moins un chiffre"
    )
    .matches(
      RegExp('[!@#$%^&*(),.?":{}|<>]'),
      'Votre mot de passe doit contenir au moins un caractère special !@#$%^&*(),.?":{}|<>'
    )
    .oneOf([ref("password")], "Les mots de passe ne correspondent pas"),
}).required();
