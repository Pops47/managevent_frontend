export interface UserTaskEventInterface {
  user_id: {
    id: number;
    email: string;
    password: string;
    role: string;
  };
  task_id: {
    id: number;
    title: string;
    description: string;
    skill_name: string;
  };
  event_id: {
    id: number;
    title: string;
    date_start: string;
    date_end: string;
    location: string;
    description: string;
    status: string;
  };
  status: string;
}
