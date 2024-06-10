import { yupResolver } from "@hookform/resolvers/yup";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { useApi } from "../../../services/hooks/useApi";
import { useRequiredParams } from "../../../services/hooks/useRequiredParams";
import { NewPasswordFormSchema } from "../../../services/schemas/NewPasswordFormSchema";
import {
  NewPasswordForm,
  Token,
} from "../../../services/types/ResetPasswordPagesType";

export default function NewPasswordPage() {
  const api = useApi();
  const navigate = useNavigate();
  const { token } = useRequiredParams<Token>();

  const getUserFromResetPassToken = async (token: string) => {
    return await axios.get(`/users/token/${token}`);
  };

  const { isPending, isSuccess } = useQuery({
    queryKey: ["userInResetPassword"],
    queryFn: () => getUserFromResetPassToken(token),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<NewPasswordForm>({
    resolver: yupResolver(NewPasswordFormSchema),
  });

  const onSubmit = async (token: string) => {
    const newPassword = watch("password");
    try {
      await api.post("auth/finalize-reset-password", { newPassword, token });
      alert("Le mot de passe a bien été modifié");
      navigate("/login");
      //replace by modal with confirmation text + login button
    } catch (error) {
      console.log("🚀 ~ onSubmit ~ error:", error);
    }
  };

  return isPending ? (
    <h1>Loading...</h1>
  ) : isSuccess ? (
    <div className="flex h-[calc(100vh-60px)] items-center">
      <form
        onSubmit={handleSubmit(() => onSubmit(token))}
        className="flex flex-col text-center gap-4 mx-large md:w-3/4 max-w-lg md:mx-auto border-dp px-large pt-12 pb-16"
      >
        <h1 className="h1-size mb-12">
          Entrez votre nouveau <br /> mot de passe
        </h1>
        <InputDefault
          label="Nouveau mot de passe"
          name="password"
          type="password"
          register={register}
          errors={errors}
          className="py-6"
        />
        <InputDefault
          label="Confirmer le nouveau mot de passe"
          name="confirmPassword"
          type="password"
          register={register}
          errors={errors}
          className="py-6"
        />
        <ButtonDefault type="submit" className="mt-6 mb-2">
          Valider
        </ButtonDefault>
        <ButtonDefault onClick={() => navigate("/login")} variant="secondary">
          Annuler
        </ButtonDefault>
      </form>
    </div>
  ) : (
    <div className="mt-32 p-6 sm:w-2/3 mx-auto text-center">
      <h2 className="h2-size mb-6 ">Lien invalide</h2>
      <p className="mb-12">
        Vérifiez le lien reçu par mail ou recommencez la procédure
      </p>
      <ButtonDefault onClick={() => navigate("/login")} variant="primary">
        Retour
      </ButtonDefault>
    </div>
  );
}
