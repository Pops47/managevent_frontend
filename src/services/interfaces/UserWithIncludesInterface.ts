interface ProfileInterface {
  avatarPath: string | null;
  firstname: string;
  lastname: string;
  nickname: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

interface UserBadgeInterface {
  task: {
    skillName: string;
    skillBadgePath: string | null;
  };
  level: number;
}

interface userNotificationInterface {
  notification: {
    id: number;
    content: string;
    createdAt: string;
    updatedAt: string;
  };
}

interface userTaskEventInterface {
  event: {
    id: number;
    title: string;
    startDate: Date;
    endDate: Date;
  };
  status: string;
  task: {
    id: number;
    name: string;
  };
}

interface UserWithIncludesInterface {
  id: string;
  email: string;
  password: string;
  role: string;
  lastConnexion: string;
  createdAt: string;
  updatedAt: string;
  refreshToken: string | null;
  resetPassToken: string | null;
  status: string;
  profile: ProfileInterface;
  userBadge: UserBadgeInterface[];
  userNotification: userNotificationInterface[];
  userTaskEvent: userTaskEventInterface[];
}
