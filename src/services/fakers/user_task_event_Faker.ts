const user_task_event_Faker = [
  {
    user_id: {
      id: 1,
      email: 'bla@bla.bla',
      password: '123456789',
      role: 'admin'
    },
    task_id: {
      id: 1,
      title: 'Buvette',
      description: 'Tenir la buvette',
      skill_name: "Serveur de l'extrème"
    },
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
    status: 'A venir'
  },
  {
    user_id: {
      id: 2,
      email: 'fake@fake.fake',
      password: '123456789',
      role: 'volunteer'
    },
    task_id: {
      id: 2,
      title: 'Stand crèpes',
      description: 'Tenir le Stand de crèpes',
      skill_name: 'Crêpier Breton'
    },
    event_id: {
      id: 3,
      title: 'Séance film',
      date_start: 'Samedi 03 Mars 14:00',
      date_end: 'Samedi 03 Mars 17:00',
      location: 'Salle de la Lune',
      description: 'BlablaBlablaBlablaBlablaBlablaBlablaBlablaBlabla',
      status: 'close'
    },
    status: 'A venir'
  }
];

export { user_task_event_Faker };
