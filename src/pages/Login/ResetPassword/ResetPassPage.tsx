import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ButtonDefault from "../../../components/ButtonDefault";
import { InputDefault } from "../../../components/InputDefault";
import { postEmailToResetPassword } from "../../../services/api/auth";
import { ResetPassFormSchema } from "../../../services/schemas/ResetPasswordFormSchema";
import { ResetPasswordForm } from "../../../services/types/ResetPasswordPagesType";

export default function ResetPassPage() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ResetPasswordForm>({
    resolver: yupResolver(ResetPassFormSchema),
  });

  //gérer la récup de l'erreur si l'email n'existe pas

  const onSubmit: SubmitHandler<ResetPasswordForm> = async (data) => {
    try {
      await postEmailToResetPassword(data.email);
      navigate("/login/check-email");
    } catch (error: any) {
      if (error.response.data.message === "No user with this email") {
        setError("email", {
          type: "custom",
          message: "L'email n'existe pas",
        });
      } else console.log(error);
    }
  };

  return (
    <div className="flex h-[calc(100vh-60px)] items-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col mx-large mb-24 md:w-3/4 max-w-lg md:mx-auto border-dp px-large pt-12 pb-16"
      >
        <div className="flex flex-col justify-center items-center text-center ">
          <h1 className="h1-size mb-12">
            Réinitialisation <br /> du mot de passe
          </h1>
          <p className="mb-12">
            Un lien pour réinitialiser votre mot de passe <br />
            vous sera communiqué par mail.
          </p>
        </div>
        <InputDefault
          label={"Votre email"}
          name={"email"}
          type={"email"}
          register={register}
          errors={errors}
        />
        <ButtonDefault type="submit" className="mt-small">
          Valider
        </ButtonDefault>
      </form>
    </div>
  );
}
