import { eventsFaker } from "../../pages/Events/eventsFaker";
import { eventDataFaker, eventsForCalendarFaker } from "../fakers/eventsFaker";
import { useApi } from "../hooks/useApi";
import { EventForCalendarInterface } from "../interfaces/EventInterface";

const api = useApi();

export async function getEventDataForUpdateEventPage(
  eventId: string | undefined
) {
  try {
    const data = eventDataFaker[Number(eventId)];
    // REMPLACER par requete get sur (user_task_event JOIN events) by user_id
    //
    // const {data} = await axios.get(`/user-task-event/${user_id}`)
    // return data
    //
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getEvents() {
  try {
    const { data } = await api.get("/events");
    return data.data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function getEventId() {
  try {
    const data = await eventsFaker;
    const dataId = data.filter((event) => event.id === 1);

    //const { data } = await axios.get("/profile/id");
    return dataId;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}

export async function findAllEventsForCalendar(): Promise<
  EventForCalendarInterface[] | undefined
> {
  try {
    const data = await eventsForCalendarFaker;
    //const { data } = await axios.get("/event");
    // cf EventForCalendarrInterface to know how to convert "events" to "eventsForCalendar"
    // (dates, status, etc..)
    return data;
  } catch (err) {
    console.log("ERROR");
    console.log(err);
  }
}
