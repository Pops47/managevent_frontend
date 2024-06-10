import { yupResolver } from "@hookform/resolvers/yup";
import { Input, Typography } from "@material-tailwind/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import ButtonDefault from "../../components/ButtonDefault";
import { loginUser } from "../../services/api/auth";
import { LoginForm } from "../../services/interfaces/LoginForm";

const dataSchema = yup.object({
  email: yup
    .string()
    .email("Votre e-mail n'est pas valide")
    .required("Ce champ est obligatoire"),
  password: yup.string().required("Ce champ est obligatoire !!"),
});

export default function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(dataSchema),
  });

  const onSubmit = async (values: LoginForm): Promise<any> => {
    const { token } = await loginUser(values);
    if (token) {
      localStorage.setItem("authToken", token);
      navigate("/events");
    }
  };

  return (
    <>
      <div className="flex flex-col justify-items-center ">
        <div className=" mt-10 text-center">
          <Typography variant="h1" color="white">
            Se connecter
          </Typography>
          <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
            <div className="sm:w-full md:w-6/12 md:mx-auto lg:w-4/12 lg:mx-auto xl:w-3/12 xl:mx-auto border rounded-lg border-gray-800 p-6 mt-10">
              <h2 className="mb-3 flex justify-center">Connexion</h2>
              <div className="mb-1 flex flex-col gap-3">
                <Input
                  {...register("email")}
                  label="Votre Email"
                  type="email"
                  name="email"
                />
                <small className="text-sm text-red-500">
                  {errors.email?.message}
                </small>

                <Input
                  {...register("password")}
                  type="password"
                  label="Mot de passe"
                  name="password"
                />
                <small className="text-sm text-red-500">
                  {errors.password?.message}
                </small>
              </div>
              <div className="flex flex-col justify-center items-center gap-1">
                <div className="mb-8 mt-4">
                  <Link
                    to="/login/reset-pass"
                    className="font-medium text-light-blue-600 "
                  >
                    Mot de passe oublié?
                  </Link>
                </div>
              </div>
              <div className="sm:w-full sm:mx-auto md:w-7/12 md:mx-auto lg:w-8/12 lg:mx-auto ">
                <ButtonDefault type="submit">Se connecter</ButtonDefault>
              </div>
              <div>
                <Typography
                  color="white"
                  className="mt-4 text-center font-normal"
                  placeholder={undefined}
                >
                  Vous n'avez pas de compte? <br />
                  <Link
                    to="/register"
                    className="font-medium text-light-blue-600 ml-4"
                  >
                    Inscrivez-vous
                  </Link>
                </Typography>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
