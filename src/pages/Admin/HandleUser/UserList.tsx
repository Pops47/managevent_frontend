import { faPencil, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

enum UserRoleEnum {
  volunteer = "Volunteer",
  admin = "admin",
  superAdmin = "superAdmin",
}

export interface User {
  firstname: string;
  lastname: string;
  nickname: string;
  role: UserRoleEnum;
}

export default function UserList() {
  // const [open, setOpen] = useState(false);
  //  const handleOpen = () => {
  //  setOpen(!open);

  // }
  const [users] = useState<User[]>([
    {
      firstname: "Al",
      lastname: "Pacino",
      nickname: "Corleone",
      role: UserRoleEnum.volunteer,
    },
    {
      firstname: "Tupac",
      lastname: "Shahur",
      nickname: "2 Pac",
      role: UserRoleEnum.volunteer,
    },
  ]);

  return (
    <>
      <h1 className=" font-bold text-center text-xl mt-10">Espace Admin </h1>
      <h2 className=" font-bold text-center text-md mt-10">
        Liste des Utilisateurs :
      </h2>
      <div className=" flex justify-center  rounded-md mt-5 mb-5 relative">
        <input
          type="text"
          placeholder="Recherche par nom"
          className="px-10 text-black"
        />
        <FontAwesomeIcon
          title="Voir la tache"
          icon={faSearch}
          className=" absolute text-black top-1 ms-60"
        />
      </div>
      {/*-------------------*/}
      {users.length ? (
        <div className="text-white mt-5">
          <div className="flex justify-center">
            <ul className="">
              {" "}
              {users.map((user, index) => (
                <div
                  key={index}
                  className="flex mt-3 items-center  border border-orange-300 p-2 gap-1 rounded-lg "
                >
                  <div className=" w-6/12 p-1 mx-10">
                    <Link to="" title="">
                      {user.firstname} {user.lastname}
                      <br />
                      {user.nickname}
                    </Link>
                  </div>
                  <div className="flex gap-5 mx-auto">
                    {user.role}
                    <FontAwesomeIcon
                      title="Modifier la tache"
                      icon={faPencil}
                    />
                  </div>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-center text-md mt-10 text-orangeDP ">
          Aucun Utilisateur inscrit
        </p>
      )}
    </>
  );
}
