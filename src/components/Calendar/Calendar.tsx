import allLocales from "@fullcalendar/core/locales-all.js";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
import { getEvents } from "../../services/api/event";
import { EventForCalendarInterface } from "../../services/interfaces/EventInterface";
import { CalendarPropsType } from "../../services/types/components-types/CalendarType";
import { transformEvents } from "../../services/utils/TransformEvents";
import DialogEventDetail from "../Dialog/DialogEventDetail";
import "./Calendar.css";

export default function Calendar({
  eventsForCalendar,
  isPanelAdmin,
}: CalendarPropsType) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [eventDate, setEventDate] = useState("");
  const [eventsByDate, setEventsByDate] = useState<EventForCalendarInterface[]>(
    []
  );

  const {
    data: events,
    isSuccess,
    error,
    isError,
  } = useQuery({
    queryKey: ["events"],
    queryFn: () => getEvents(),
    staleTime: 0,
  });

  const handleDateClick = (arg: any) => {
    setEventDate(arg.dateStr);
    if (isSuccess) {
      const eventsGroupedByDate = transformEvents(events);
      const group = eventsGroupedByDate.find(
        (group) => group.date === arg.dateStr
      );
      if (group) {
        setEventsByDate(group?.events);
      } else {
        setEventsByDate([]);
      }
      handleOpen();
    }
    if (isError) {
      console.log(error);
    }
  };

  // custom events in calendar
  function renderEventContent(eventInfo: any) {
    return (
      <div className="flex gap-2">
        <img
          src={
            eventInfo.event.extendedProps.status === "Incomplete"
              ? openEvent
              : closeEvent
          }
        />
        <p className="hidden sm:block truncate font-bold">
          {eventInfo.event.title}
        </p>
      </div>
    );
  }

  return (
    <>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={isPanelAdmin}
        weekends={true}
        firstDay={1}
        events={eventsForCalendar}
        height={"80vh"}
        buttonText={{ today: "⏎" }}
        headerToolbar={{
          start: "today",
          center: "title",
          end: "prevYear,prev,next,nextYear",
        }}
        eventColor="#ff9c06"
        eventTextColor="#2e3461"
        dayMaxEvents={true}
        locales={allLocales}
        locale={"fr"}
        eventContent={renderEventContent}
        dateClick={handleDateClick}
      />
      <DialogEventDetail
        handleOpen={handleOpen}
        open={open}
        eventDate={eventDate}
        eventsByDate={eventsByDate}
        isPanelAdmin={isPanelAdmin}
      />
    </>
  );
}
