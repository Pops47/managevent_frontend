import { Link } from "react-router-dom";
import ButtonDefault from "../../components/ButtonDefault";
import "./Homepage.css";

export default function Homepage() {
  return (
    <>
      <div className="homepage pt-20 px-6">
        <div className="flex flex-col">
          <h1 className="text-white mx-auto font-bold py-10">Manag'Event</h1>
          <p className="text-justify text-white sm:w-10/12 sm:mx-auto  md:w-7/12 md:mx-auto lg:w-5/12 lg:mx-auto xl:w-4/12 xl:mx-auto py-2 p-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            neque in vel quod fuga illo sequi voluptate et voluptatibus dolor
            temporibus distinctio, expedita nam, eum soluta. Quaerat cupiditate,
            corporis quod iure pariatur sed animi quam aliquam, delectus esse
            assumenda incidunt quos voluptates in accusamus, nesciunt voluptate?
            Tenetur nobis fuga sapiente tempora similique quos odio hic
            voluptatibus debitis dicta corporis in, soluta, ut nisi beatae
            pariatur iusto sint omnis quam, aut autem! !
          </p>
        </div>
        <div className="mb-5 mt-5">
          <div className="sm:w-4/12 sm:mx-auto md:w-3/12 md:mx-auto lg:w-3/12 lg:mx-auto xl:w-2/12 xl:mx-auto mb-2">
            <Link to={"/login"}>
              <ButtonDefault>Se connecter</ButtonDefault>
            </Link>
          </div>
          <div className="sm:w-4/12 sm:mx-auto md:w-3/12 md:mx-auto lg:w-3/12 lg:mx-auto xl:w-2/12 xl:mx-auto">
            <Link to={"/register"}>
              <ButtonDefault>S'inscrire</ButtonDefault>
            </Link>
          </div>
        </div>

        <div className="flex justify-center mx-auto">
          <Link to="/contact" className="border-b-2 text-white">
            Contactez-nous
          </Link>
        </div>
      </div>
    </>
  );
}
