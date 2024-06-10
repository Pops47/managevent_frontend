import { yupResolver } from "@hookform/resolvers/yup";
import {
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
import { InputDefault } from "../../components/InputDefault";
import { registerUser } from "../../services/api/auth";
import { RegisterFormSchema } from "../../services/schemas/RegisterFormSchema";

export type NewUserProps = {
  email: string;
  password: string;
  role: string;
};
export type Inputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<Inputs>({
    resolver: yupResolver(RegisterFormSchema),
  });

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!data.email) {
      return;
    }
    const newUser = {
      email: data.email,
      password: data.password,
    };
    try {
      await registerUser(newUser);
      setOpen(true);
    } catch (error: any) {
      if (error.response.data.message === "Email already exists") {
        setError("email", {
          type: "custom",
          message: "L'email existe déja",
        });
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-14 mt-10 ">
      <Typography variant="h1" color="white">
        S'inscrire
      </Typography>
      <div className="border rounded-lg border-gray-800 p-6">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col justify-center gap-6 w-72"
          action=""
          aria-label="Inscription"
        >
          <InputDefault
            label="Votre Email"
            name="email"
            type="text"
            register={register}
            errors={errors}
          />
          <InputDefault
            label="Mot de passe"
            name="password"
            type="password"
            register={register}
            errors={errors}
          />
          <InputDefault
            label="Confirmer le mot de passe"
            name="confirmPassword"
            type="password"
            register={register}
            errors={errors}
          />
          <ButtonDefault type="submit">M'inscrire</ButtonDefault>
          <Dialog
            open={open}
            handler={handleOpen}
            dismiss={{
              outsidePress: () => false,
            }}
          >
            <DialogHeader>Validation de l'inscription</DialogHeader>
            <DialogBody>
              Votre inscription à été pris en compte. Consulter vos emails pour
              finaliser l'inscription.
            </DialogBody>
          </Dialog>
        </form>
        <div className="flex justify-between mt-6">
          <p>Déjà un compte ?</p>
          <Link className="text-light-blue-600" to="/login">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
  );
}
