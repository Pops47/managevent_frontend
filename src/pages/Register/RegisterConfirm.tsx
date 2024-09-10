import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
import { verifyConfirmToken } from "../../services/api/auth";

export default function RegisterConfirmEmail() {
  let { token } = useParams();

  if (!token) {
    return (
      <div className="flex flex-col gap-6 items-center text-center mt-24">
        <p>Lien erroné, veuillez recommencer la procédure d'inscription</p>
        <Link to="/register">
          <ButtonDefault>Inscription</ButtonDefault>
        </Link>
      </div>
    );
  }

  const { isPending, isError, isSuccess } = useQuery({
    queryKey: ["registerConfirmation"],
    queryFn: () => verifyConfirmToken(token),
  });

  return (
    <>
      <div className="text-center mt-24">Confirmation de l'email</div>
      {isPending && <p>Loading...</p>}
      {isSuccess && (
        <div className="flex flex-col gap-6 items-center text-center mt-24">
          <p>
            Votre email a bien été validé, vous pouvez désormais vous connecter
          </p>
          <Link to="/login">
            <ButtonDefault>Connexion</ButtonDefault>
          </Link>
        </div>
      )}
      {isError && (
        <div className="flex flex-col gap-6 items-center text-center mt-24">
          <p>
            Une erreur s'est produite, veuillez recommencer la procédure
            d'inscription
          </p>
          <Link to="/register">
            <ButtonDefault>Inscription</ButtonDefault>
          </Link>
        </div>
      )}
    </>
  );
}
