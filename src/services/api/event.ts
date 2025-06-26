import { eventsFaker } from "../../pages/Events/eventsFaker";
import { useApi } from "../hooks/useApi";
import { EventForCalendarInterface, EventType } from "../interfaces/EventInterface";
import { transformIsoStringDateToDayAfter } from "../utils/DateDayFrFormat";

const api = useApi();

export async function getEventById(eventId: string | undefined) {
  try {
    if (!eventId) {
      throw new Error("Event ID is required");
    }

    const { data } = await api.get(`/events/${eventId}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
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

    const eventsForCalendar = events.map((event: EventType): EventForCalendarInterface => {
      let newEndDate = transformIsoStringDateToDayAfter(event.endDate);
      // this is because in fullcalendar 'end' is exclusive, so we have to give it the day after endDate
      return {
        id: event.id.toString(),
        title: event.title,
        start: event.startDate.split("T")[0],
        end: newEndDate.split("T")[0],
        status: event.status,
      };
    });
    return eventsForCalendar;
  } catch (err) {
    console.log(err);
  }
}
