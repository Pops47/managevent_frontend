export default function CheckEmailPage() {
  return (
    <div className="flex h-[calc(100vh-60px)] items-center ">
      <div className="flex flex-col text-center mx-large mb-24 md:w-3/4 max-w-lg md:mx-auto border-dp px-large pt-12 pb-16">
        <h1 className="h1-size mb-12">
          Réinitialisation <br /> du mot de passe
        </h1>
        <h2 className="h2-size mb-12">Email envoyé !</h2>
        <p className="mb-16">
          Veuillez vérifier votre boîte de réception et cliquer sur le lien
          permettant de réinitialiser votre mot de passe.
        </p>
      </div>
    </div>
  );
}
