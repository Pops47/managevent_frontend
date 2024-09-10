import { faUser } from '@fortawesome/free-regular-svg-icons/faUser';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons/faPowerOff';
import { faUserShield } from '@fortawesome/free-solid-svg-icons/faUserShield';
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function NavBarAdmin() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleDisconnect = () => {
    localStorage.removeItem('authToken');
  };

  return (
    <>
      <nav className="z-50 flex justify-around text-sm lg:text-base md:justify-between items-center bg-navBarBlueDP opacity-95 text-white p-large fixed inset-x-0 bottom-0 md:sticky md:top-0 ">
        <div className="hidden md:flex gap-8 lg:gap-12 ">
          <Link
            to={'/events'}
            className={`text-orangeDP hover:text-darkOrangeDP flex gap-2`}
          >
            <span>Accueil</span>
            <FontAwesomeIcon icon={faUser} size="lg" />
          </Link>
          <Link to={'/admin/events'} className="hover:text-lightBlueDP">
            Gestion événements
          </Link>
          <Link to={'/admin/tasks'} className="hover:text-lightBlueDP">
            Gestion tâches
          </Link>
          <Link to={'/admin/users'} className="hover:text-lightBlueDP">
            Gestion utilisateurs
          </Link>
        </div>
        <Link
          onClick={handleDisconnect}
          to={'/'}
          className="hover:text-lightBlueDP hidden md:flex md:gap-2"
        >
          <span>Déconnexion </span>
          <FontAwesomeIcon icon={faPowerOff} size="lg" />
        </Link>

        {isMenuOpen ? (
          <div className="md:hidden flex flex-col gap-8 justify-center items-center pt-4 text-base">
            <Link to={'/admin/events'} className="hover:text-lightBlueDP">
              Gestion événements
            </Link>
            <Link to={'/admin/tasks'} className="hover:text-lightBlueDP">
              Gestion tâches
            </Link>
            <Link to={'/admin/users'} className="hover:text-lightBlueDP">
              Gestion utilisateurs
            </Link>
            <Link
              onClick={handleDisconnect}
              to={'/'}
              className="hover:text-lightBlueDP flex gap-2"
            >
              <span>Déconnexion </span>
              <FontAwesomeIcon icon={faPowerOff} size="lg" />
            </Link>
            <FontAwesomeIcon
              icon={faXmark}
              size="lg"
              cursor="pointer"
              className="hover:text-lightBlueDP"
              onClick={toggleMenu}
            />
          </div>
        ) : (
          <div className="md:hidden flex w-full justify-around text-base">
            <FontAwesomeIcon
              icon={faUserShield}
              size="lg"
              className="text-orangeDP"
            />
            <FontAwesomeIcon
              icon={faBars}
              size="lg"
              cursor="pointer"
              className=" hover:text-lightBlueDP"
              onClick={toggleMenu}
            />
            <Link to={'/'}>
              <FontAwesomeIcon
                icon={faUser}
                size="lg"
                cursor="pointer"
                className=" hover:text-lightBlueDP"
              />
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
