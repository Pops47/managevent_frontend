import { useState } from 'react';
import TaskEvent from '../../components/TaskEvent';
import BackPreviousPage from '../../components/BackPreviousPage';
import { useNavigate, useParams } from 'react-router-dom';
import { EventDetailInterface } from '../../services/interfaces/DetailEventInterface';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '../../services/api/event';
import { getUser } from '../../services/api/user';
import {
  createUserTaskEvent,
  deleteUserTaskEvent
} from '../../services/api/user_task_event';
import { putTaskEvent } from '../../services/api/task_event';

export default function DetailEventPage() {
  const navigate = useNavigate();

  const [value, setValue] = useState<number | null>(null);
  const eventId = useParams();
  const { data: events } = useQuery<EventDetailInterface[] | undefined>({
    queryKey: ['events'],
    queryFn: () => getEvents(),
    staleTime: 0
  });
  const { data: user } = useQuery<UserWithIncludesInterface | undefined>({
    queryKey: ['user'],
    queryFn: () => getUser(),
    staleTime: 0
  });

  const taskEventId = events?.filter(
    (event) => event.id === Number(eventId.id)
  );

  let usertaskId = 0;
  const userTaskEvent = user?.userTaskEvent;
  if (taskEventId !== undefined) {
    for (const event of taskEventId) {
      if (userTaskEvent !== undefined) {
        usertaskId = userTaskEvent
          ?.filter((el) => el.event.id === event.id)
          .map((el) => el.task.id)[0];
      }
    }
  }

  let toParticipe = taskEventId?.map((el) =>
    el.userTaskEvent
      .map((el) => el.userId)
      .map((el) => el)
      .find((el) => el === user?.id)
  )[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newUserTaskEvent = {
      userId: user?.id,
      eventId: taskEventId![0].id,
      taskId: value
    };
    const ValuetaskEventObject = taskEventId![0].taskEvent
      .map((el) => el)
      .find((el) => el.taskId === value);
    const ActualtaskEventObject = taskEventId![0].taskEvent
      .map((el) => el)
      .find((el) => el.taskId === usertaskId);

    const pullVolunteerNumber = {
      volunteerNumber: ValuetaskEventObject?.volunteerNumber! - 1
    };
    const addVolunteerNumber = {
      volunteerNumber: ActualtaskEventObject?.volunteerNumber! + 1
    };

    if (value === null) {
      alert('Veuillez choisir une tâche pour cet évènement');
    } else if (toParticipe !== undefined) {
      if (ActualtaskEventObject === ValuetaskEventObject) {
        alert('Vous êtes déjà inscrit sur cette tâche');
      } else {
        //delete
        await deleteUserTaskEvent(usertaskId, taskEventId![0].id, user?.id!);
        await putTaskEvent(usertaskId, taskEventId![0].id, addVolunteerNumber);
        //create
        await createUserTaskEvent(newUserTaskEvent);
        await putTaskEvent(value, taskEventId![0].id, pullVolunteerNumber);
        navigate('/profile');
      }
    } else {
      await createUserTaskEvent(newUserTaskEvent);
      await putTaskEvent(value, taskEventId![0].id, pullVolunteerNumber);
      navigate('/profile');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(Number(e.target.value));
  };

  return (
    <>
      <BackPreviousPage path="/events" />
      {taskEventId?.map((event, index) => (
        <TaskEvent
          event={event}
          key={index}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          value={value}
          user={user}
          toParticipe={toParticipe}
          usertaskId={usertaskId}
        />
      ))}
    </>
  );
}
