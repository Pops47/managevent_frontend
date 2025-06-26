// import axios from 'axios';
import { useApi } from "../hooks/useApi";

const api = useApi();

export async function createUserTaskEvent(newUserTaskEvent: any) {
  try {
    const { data } = await api.post("user-task-events", newUserTaskEvent);
    return data.data;
  } catch (error: any) {
    throw error;
  }
}

export async function deleteUserTaskEvent(taskId: number, eventId: number, userId: string) {
  try {
    const { data } = await api.delete(`user-task-events/${taskId}/${eventId}/${userId}`);
    return data;
  } catch (error) {
    return error;
  }
}
