import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ButtonDefault from '../../components/ButtonDefault';
import { getProfile } from '../../services/api/profile';
import { ProfileInterface } from '../../services/interfaces/ProfileInterface';
import ProfileEvents from './ProfileEvents';
import ProfileSkills from './ProfileSkills';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [activeLink, setActiveLink] = useState<'events' | 'skills'>('events');

  const {
    data: profile,
    isLoading,
    isError
  } = useQuery<ProfileInterface | undefined>({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    staleTime: 0
  });
  const { firstname, lastname, nickname, avatarPath, email } = { ...profile };

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Vous n'avez pas accès à ce profile</p>
  ) : (
    <div className="flex flex-col md:w-2/3 m-large md:my-16 md:mx-auto gap-12 ">
      <section className="flex p-small lg:p-12 bg-mediumBlueDP rounded-xl">
        <div className="shrink-0 w-32 mr-8 sm:mr-12 md:mr-24">
          <img
            className="w-32 h-32 rounded-full"
            src={avatarPath}
            alt="Image de profil"
          />
        </div>
        <div className="flex flex-col w-full gap-2 md:gap-4 justify-center">
          <h1 className="h1-size mb-2">{nickname}</h1>
          <div className="flex flex-col">
            <div>
              {firstname} {lastname}
            </div>
            <div className="italic">{email}</div>
          </div>
          <div className="mt-4 flex lg:justify-end">
            <ButtonDefault
              onClick={() => navigate(`/profile/update`)}
              className="h-12 w-32 text-sm md:text-lg"
            >
              Modifier
            </ButtonDefault>
          </div>
        </div>
      </section>
      <nav className="flex justify-around md:text-xl">
        <button
          onClick={() => {
            setActiveLink('events');
          }}
          className={
            activeLink === 'events'
              ? 'underline cursor-default text-orangeDP'
              : 'text-orangeDP hover:underline'
          }
        >
          Mes Evénements
        </button>
        <button
          onClick={() => {
            setActiveLink('skills');
          }}
          className={
            activeLink === 'skills'
              ? 'underline cursor-default text-orangeDP'
              : 'text-orangeDP hover:underline'
          }
        >
          Mes Compétences
        </button>
      </nav>
      {activeLink === 'events' ? <ProfileEvents /> : <ProfileSkills />}
    </div>
  );
}
