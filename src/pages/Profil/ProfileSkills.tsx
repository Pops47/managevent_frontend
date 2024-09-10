import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/api/user';

export default function ProfileSkills() {
  const {
    data: user,
    isLoading,
    isError
  } = useQuery<UserWithIncludesInterface | undefined>({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: 0
  });

  const userBadges = user?.userBadge;

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <div className="flex flex-col gap-4 md:gap-6">
      {userBadges && userBadges.length > 0 ? (
        userBadges.map((userBadge, index) => (
          <div
            key={index}
            className="flex justify-start gap-4 border-dp p-large"
          >
            <h3 className="h3-size ml-large">{userBadge.task.skillName}</h3>
            <div className="flex grow justify-end">
              <p className="underline">level : {userBadge.level}</p>
            </div>
          </div>
        ))
      ) : (
        <p>Vous n'avez aucun badge de compétence pour le moment</p>
      )}
    </div>
  );
}
