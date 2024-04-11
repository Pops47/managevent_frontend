import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { InputDefault } from '../../components/InputDefault';
import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import ButtonDefault from '../../components/ButtonDefault';

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

const schema = yup
  .object({
    email: yup
      .string()
      .required("L'email est requis")
      .email('email non valide'),
    password: yup
      .string()
      .required('Le mot de passe est requis')
      .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
      .matches(
        RegExp('(.*[a-z].*)'),
        'Votre mot de passe doit contenir au moins une miniscule'
      )
      .matches(
        RegExp('(.*[A-Z].*)'),
        'Votre mot de passe doit contenir au moins une majuscule'
      )
      .matches(
        RegExp('(.*\\d.*)'),
        'Votre mot de passe doit contenir au moins un chiffre'
      )
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        'Votre mot de passe doit contenir au moins un caracteère special'
      ),
    confirmPassword: yup
      .string()
      .required('La confirmation du mot de passe est requise')
      .matches(
        RegExp('(.*[a-z].*)'),
        'Votre mot de passe doit contenir au moins une miniscule'
      )
      .matches(
        RegExp('(.*[A-Z].*)'),
        'Votre mot de passe doit contenir au moins une majuscule'
      )
      .matches(
        RegExp('(.*\\d.*)'),
        'Votre mot de passe doit contenir au moins un chiffre'
      )
      .matches(
        RegExp('[!@#$%^&*(),.?":{}|<>]'),
        'Votre mot de passe doit contenir au moins un caracteère special !@#$%^&*(),.?":{}|<>'
      )
      .oneOf([yup.ref('password')], 'Le mot de passe ne correspond pas')
  })

    .required();

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(schema)
  });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        const newUser = {
            email: data.email,
            password: data.password,
            role: 'volunteer'
        };
        console.log('data:', newUser);

    // postUsers(newUser);
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
        </form>
        <div className="flex justify-between mt-6">
          <p>Déjà un compte ?</p>
          <Link className="text-light-blue-600" to="/connexion">
            Se connecter
          </Link>
        </div>
      </div>
    </div>
    );
}
