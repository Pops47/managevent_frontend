const task_event_Faker = [
  {
    event_id: {
      id: 1,
      title: 'Apéro',
      date_start: 'Samedi 27 Février 08:00',
      date_end: 'Samedi 27 Février 17:00',
      location: 'Stade Roudourou',
      description:
        "L'apéro se déroulera dans le stade du roudourou à l'adresse de micheline les bains, nous pourrons y découvrir pleins de bonnes choses à manger et à boire, KENAVO !!",
      status: 'open'
    },
    task_id: [
      {
        id: 1,
        name: 'Buvette',
        description: 'Tenir la buvette',
        skill_name: "Serveur de l'extrème"
      },
      {
        id: 2,
        name: 'Stand crèpes',
        description: 'Tenir le stand de crèpes',
        skill_name: 'Crépier Breton'
      },
      {
        id: 3,
        name: 'Tickets',
        description: 'Vendre les tickets',
        skill_name: 'the commercial'
      }
    ],
    volunteers_number: 4
  },
  {
    event_id: {
      id: 3,
      title: 'Séance film',
      date_start: 'Samedi 03 Mars 14:00',
      date_end: 'Samedi 03 Mars 17:00',
      location: 'Salle de la Lune',
      description: 'BlablaBlablaBlablaBlablaBlablaBlablaBlablaBlabla',
      status: 'close'
    },
    task_id: [
      {
        id: 1,
        name: 'Buvette',
        description: 'Tenir la buvette',
        skill_name: "Serveur de l'extrème"
      },
      {
        id: 2,
        name: 'Stand crèpes',
        description: 'Tenir le stand de crèpes',
        skill_name: 'Crépier Breton'
      },
      {
        id: 3,
        name: 'Tickets',
        description: 'Vendre les tickets',
        skill_name: 'the commercial'
      }
    ],
    volunteers_number: 4
  }
];

export { task_event_Faker };
