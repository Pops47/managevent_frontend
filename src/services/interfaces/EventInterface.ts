export interface EventInterface {
  id: number;
  title: string;
  date_start: Date;
  date_end: Date;
  location: string;
  description: string;
  status: string;
}

export interface EventDataFaker {
  title: string;
  startDate: Date;
  endDate: Date;
  adress: string;
  description: string;
  tasks: {
    taskName: string;
    volunteerNumber: number;
  }[];
}
export interface EventForCalendarInterface {
  id: string;
  title: string;
  start: string;
  end: string;
  // ATTENTION : sur fullcalendar end est exclusif
  //=> si l'évènement à lieu du 22 au 23, start doit être égal à 22 mais end doit être égal à 24
  //pour que l'affichage soit correct
  // (end doit donc être égal à startEnd + 1)
  status: "Complete" | "Incomplete";
}

export type EventType = {
  id: number;
  title: string;
  startDate: string;
  endDate: string;
  location: string;
  description: string;
  status: "Complete" | "Incomplete";
};

export type EventsByDate = {
  date: string;
  events: EventForCalendarInterface[];
};
export type GoupPropsType = {
  group: EventsByDate;
  isPanelAdmin: boolean;
};
export type CardEventPropsType = {
  group: EventsByDate;
  onClick: () => void;
};
