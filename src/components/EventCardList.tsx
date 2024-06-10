import { useQuery } from '@tanstack/react-query';
import { getevent } from '../services/api/event';
import { DialogSelectEvent } from './Dialog/DialogSelectEvent';
import { EventType, EventsByDate } from '../services/interfaces/EventInterface';

export default function EventCardList() {
  const {
    data: events,
    isLoading,
    isError,
    error
  } = useQuery<EventType[] | undefined>({
    queryKey: ['events'],
    queryFn: () => getevent(),
    staleTime: 0
  });

  const transformEvents = (events: EventType[]): EventsByDate[] => {
    events.forEach(
      (event) => (event.startDate = event.startDate.split('T')[0])
    );
    const groupedEvents = events.reduce(
      (acc: EventsByDate[], currentEvent: EventType) => {
        const dateToExtend = acc.find((e) => e.date === currentEvent.startDate);
        if (acc.length !== 0 && dateToExtend) {
          dateToExtend.events.push(currentEvent);
        } else
          acc.push({ date: currentEvent.startDate, events: [currentEvent] });
        return acc;
      },
      []
    );
    return groupedEvents;
  };

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error: {error.message}</div>;

  return (
    <div className="mt-small">
      {events &&
        transformEvents(events).map((group, index) => (
          <DialogSelectEvent key={index} group={group} />
        ))}
    </div>
  );
}
