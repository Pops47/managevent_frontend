// import axios from 'axios';
import { user_task_event_Faker } from "../fakers/user_task_event_Faker";
import { useApi } from "../hooks/useApi";

const api = useApi();

export async function get_user_task_event() {
  try {
    const data = await user_task_event_Faker;

    //const { data } = await axios.get("/user_task_event");
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function delete_user_task_event(id: number) {
  try {
    // const userToDelete = user_task_event_Faker?.find(
    //   (user) => user.user_id === Number(id)
    // );
    // await axios.delete(`/user_task_event/${id}`, { data: { userToDelete } });
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function createUserTaskEvent(newUserTaskEvent: any) {
  try {
    const { data } = await api.post("user-task-events", newUserTaskEvent);
    return data.data;
  } catch (error: any) {
    throw error;
  }
}

export async function deleteUserTaskEvent(
  taskId: number,
  eventId: number,
  userId: string
) {
  try {
    const { data } = await api.delete(
      `user-task-events/${taskId}/${eventId}/${userId}`
    );
    return data;
  } catch (error) {
    return error;
  }
}
