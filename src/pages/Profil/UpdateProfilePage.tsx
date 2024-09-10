import { InputDefault } from '../../components/InputDefault';
import ButtonDefault from '../../components/ButtonDefault';
import { SubmitHandler, useForm } from 'react-hook-form';
import { putPorfileUser } from '../../services/api/profile';
import { DialogDeleteUser } from '../../components/Dialog/DialogDeleteUser';
import { DialogUpdatePassword } from '../../components/Dialog/DialogUpdatePassword';
import { useQuery } from '@tanstack/react-query';
import { DialogUpdateAvatar } from '../../components/Dialog/DialogUpdateAvatar';
import BackPreviousPage from '../../components/BackPreviousPage';
import { getUser, putUser } from '../../services/api/user';

interface ProfileInfosPropsInterface {
  firstname: string;
  lastname: string;
  nickname: string;
  email: string;
}

export default function UpdateProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ProfileInfosPropsInterface>();

  const {
    data: user,
    isLoading,
    isError
  } = useQuery<UserWithIncludesInterface | undefined>({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: 0
  });

  const onSubmit: SubmitHandler<ProfileInfosPropsInterface> = (data) => {
    const UpdateProfile = {
      firstname: data.firstname,
      lastname: data.lastname,
      nickname: data.nickname
    };
    const UpdateUserEmail = {
      email: data.email
    };
    putPorfileUser(UpdateProfile);
    putUser(UpdateUserEmail);
  };

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <>
      <BackPreviousPage path="/profile" />

      <div className="flex flex-col items-center gap-14 mt-10 ">
        <>
          <div className="flex flex-col gap-3">
            <div className="flex justify-center mb-10 ">
              <DialogUpdateAvatar />
            </div>
            <DialogUpdatePassword />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col justify-center gap-4"
              action=""
            >
              <InputDefault
                label="Votre Prénom"
                name="firstname"
                type="text"
                defaultValue={user?.profile.firstname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre Nom"
                name="lastname"
                type="text"
                defaultValue={user?.profile.lastname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre Pseudo"
                name="nickname"
                type="text"
                defaultValue={user?.profile.nickname}
                register={register}
                errors={errors}
              />
              <InputDefault
                label="Votre email"
                name="email"
                type="email"
                defaultValue={user?.email}
                register={register}
                errors={errors}
              />

              <ButtonDefault type="submit">
                Valider les modifications
              </ButtonDefault>
            </form>
            <DialogDeleteUser />
          </div>
        </>
      </div>
    </>
  );
}
