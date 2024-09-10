import { useState } from "react";
import { GoupPropsType } from "../../services/interfaces/EventInterface";
import { dayDate } from "../../services/utils/DateDayFrFormat";
import CardEvent from "../CardEvent";
import DialogEventDetail from "./DialogEventDetail";

export function DialogSelectEvent({ group, isPanelAdmin }: GoupPropsType) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const eventDate = dayDate(group.date);

  return (
    <>
      <CardEvent onClick={handleOpen} group={group} />
      <DialogEventDetail
        handleOpen={handleOpen}
        open={open}
        eventsByDate={group.events}
        eventDate={eventDate}
        isPanelAdmin={isPanelAdmin}
      />
    </>
  );
}
