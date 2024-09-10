import { eventsFaker } from "../../pages/Events/eventsFaker";
import { eventDataFaker } from "../fakers/eventsFaker";
import { useApi } from "../hooks/useApi";
import {
  EventForCalendarInterface,
  EventType,
} from "../interfaces/EventInterface";
import { transformIsoStringDateToDayAfter } from "../utils/DateDayFrFormat";

const api = useApi();

export async function getEventDataForUpdateEventPage(
  eventId: string | undefined
) {
  try {
    const data = eventDataFaker[Number(eventId) - 1];
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

export async function getEventsForCalendar() {
  try {
    const { data } = await api.get("/events");
    const events: EventType[] = data.data;

    const eventsForCalendar = events.map(
      (event: EventType): EventForCalendarInterface => {
        let newEndDate = transformIsoStringDateToDayAfter(event.endDate);
        // this is because in fullcalendar 'end' is exclusive, so we have to give it the day after endDate
        return {
          id: event.id.toString(),
          title: event.title,
          start: event.startDate.split("T")[0],
          end: newEndDate.split("T")[0],
          status: event.status,
        };
      }
    );
    return eventsForCalendar;
  } catch (err) {
    console.log(err);
  }
}
