import { task_event_Faker } from '../fakers/task_event_Faker';
import { useApi } from '../hooks/useApi';

const api = useApi();

export async function get_task_event() {
  try {
    const data = await task_event_Faker;

    //const { data } = await axios.get("/task_event");
    return data;
  } catch (err) {
    console.log('ERROR');
    console.log(err);
  }
}

export async function getTaskEvent(taskId: number, eventId: number) {
  try {
    const { data } = await api.get(`task-events/${taskId}/${eventId}`);
    return data.data;
  } catch (error) {
    return error;
  }
}
export async function putTaskEvent(
  taskId: number,
  eventId: number,
  volunteerNumberChanges: any
) {
  try {
    const { data } = await api.patch(
      `task-events/${taskId}/${eventId}`,
      volunteerNumberChanges
    );
    return data;
  } catch (error) {
    return error;
  }
}
