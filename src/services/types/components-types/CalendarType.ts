import { EventForCalendarInterface } from "../../interfaces/EventInterface";

export type CalendarPropsType = {
  eventsForCalendar: EventForCalendarInterface[];
  isPanelAdmin: boolean;
};
