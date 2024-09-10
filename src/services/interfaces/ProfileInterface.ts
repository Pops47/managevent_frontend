export interface ProfileInterface {
  id: string;
  firstname: string;
  lastname: string;
  nickname: string;
  avatarPath: string;
  email: string;
}

export interface EventInProfilePageInterface {
  date: Date;
  title: string;
}

export interface SkillInProfilePageInterface {
  name: string;
  level: number;
}
