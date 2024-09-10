import { array, date, number, object, string } from "yup";

export const CreateEventFormSchema = object({
  title: string().required("Veuillez remplir ce champ"),
  startDate: date().required(""),
  endDate: date().required("Veuillez remplir ce champ"),
  adress: string().required("Veuillez remplir ce champ"),
  description: string().required("Veuillez remplir ce champ"),
  tasks: array()
    .of(
      object().shape({
        taskName: string().required("Cette tâche n'a pas de nom"),
        volunteerNumber: number()
          .required()
          .min(1, "Il faut au moins un volontaire par tâche"),
      })
    )
    .min(1, "Veuillez ajouter au moins une tâche"),
});
