import { EventType, EventsByDate } from "../interfaces/EventInterface";

export const transformEvents = (events: EventType[]): EventsByDate[] => {
  events.forEach((event) => (event.startDate = event.startDate.split("T")[0]));
  const groupedEvents = events.reduce(
    (acc: EventsByDate[], currentEvent: EventType) => {
      const dateToExtend = acc.find((e) => e.date === currentEvent.startDate);
      const transformedCurrentEvent = {
        id: currentEvent.id.toString(),
        title: currentEvent.title,
        start: currentEvent.startDate,
        end: currentEvent.endDate,
        status: currentEvent.status,
      };
      if (acc.length !== 0 && dateToExtend) {
        dateToExtend.events.push(transformedCurrentEvent);
      } else
        acc.push({
          date: currentEvent.startDate,
          events: [transformedCurrentEvent],
        });
      return acc;
    },
    []
  );
  return groupedEvents;
};
