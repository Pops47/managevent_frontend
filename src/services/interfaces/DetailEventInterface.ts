import { TaskIdInterface } from './TaskInterface';

export interface DetailEventInterface {
  volunteers_number: number;
  event_id: {
    id: number;
    title: string;
    date_start: string;
    date_end: string;
    location: string;
    description: string;
    status: string;
  };
  task_id: {
    id: number;
    name: string;
    description: string;
    skill_name: string;
  }[];
}

export interface EventDetailInterface {
  id: number;
  title: string;
  lastname: string;
  description: string;
  adress: string;
  startDate: Date;
  endDate: Date;
  status: string;
  taskEvent: {
    taskId: number;
    volunteerNumber: number;
    needValidation: boolean;
    task: TaskIdInterface;
  }[];
  userTaskEvent: {
    userId: string;
    status: string;
  }[];
}
