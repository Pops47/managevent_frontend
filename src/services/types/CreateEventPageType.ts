import { TaskCreateEventInterface } from "../interfaces/TaskInterface";

export type CreateEventFormType = {
  title: string;
  startDate: Date;
  endDate: Date;
  adress: string;
  description: string;
  tasks?: TaskCreateEventInterface[];
};
