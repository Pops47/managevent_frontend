import { useQuery } from "@tanstack/react-query";
import { getEvents } from "../services/api/event";
import { transformEvents } from "../services/utils/TransformEvents";
import { DialogSelectEvent } from "./Dialog/DialogSelectEvent";

export default function EventCardList({
  isPanelAdmin,
}: {
  isPanelAdmin: boolean;
}) {
  const {
    data: events,
    isPending,
    isError,
    error,
  } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(),
    staleTime: 0,
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <div className="mt-small">
      {events &&
        transformEvents(events).map((group, index) => (
          <DialogSelectEvent
            key={index}
            group={group}
            isPanelAdmin={isPanelAdmin}
          />
        ))}
    </div>
  );
}
