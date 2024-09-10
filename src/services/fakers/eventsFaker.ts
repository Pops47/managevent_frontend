import { EventDataFaker } from "../interfaces/EventInterface";

export const eventDataFaker: EventDataFaker[] = [
  {
    title: "Match",
    startDate: new Date(),
    endDate: new Date(),
    adress: "Stade de foot",
    description: "Une confrontation au sommet",
    tasks: [
      {
        taskName: "Gestion des maillots",
        volunteerNumber: 1,
      },
      {
        taskName: "Billeterie",
        volunteerNumber: 2,
      },
    ],
  },
  {
    title: "Journée portes ouvertes",
    startDate: new Date(),
    endDate: new Date(),
    adress: "Stade",
    description: "Venez découvrir le rugby !",
    tasks: [
      {
        taskName: "Buvette",
        volunteerNumber: 1,
      },
      {
        taskName: "Stand de crêpes",
        volunteerNumber: 2,
      },
    ],
  },
];
