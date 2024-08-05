import { useQuery } from '@tanstack/react-query';
import { getUser } from '../../services/api/user';
import { useNavigate } from 'react-router-dom';

export default function ProfileEvents() {
  const {
    data: user,
    isLoading,
    isError
  } = useQuery<UserWithIncludesInterface | undefined>({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: 0
  });
  const userTaskEvents = user?.userTaskEvent;

  const navigate = useNavigate();

  return isLoading ? (
    <p>Loader</p>
  ) : isError ? (
    <p>Une erreur s'est produite</p>
  ) : (
    <div className="flex flex-col gap-4 md:gap-6">
      {userTaskEvents && userTaskEvents.length > 0 ? (
        userTaskEvents.map((userTaskEvent, index) => (
          <div
            onClick={() => navigate(`/events/${userTaskEvent.event.id} `)}
            key={index}
            className="border-dp p-small cursor-pointer"
          >
            <p className="text-sm md:text-lg">
              {new Date(userTaskEvent.event.startDate).toLocaleDateString()}
            </p>
            <h3 className="h3-size text-center mb-2 md:mb-4">
              {userTaskEvent.event.title}
            </h3>
          </div>
        ))
      ) : (
        <p>Vous n'êtes inscrit à aucun événement</p>
      )}
    </div>
  );
}
