import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQuery } from "@tanstack/react-query";
import { Link, useNavigate } from "react-router-dom";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
import ButtonDefault from "../../components/ButtonDefault";
import Calendar from "../../components/Calendar/Calendar";
import { getEventsForCalendar } from "../../services/api/event";

export default function CalendarPage({
  isPanelAdmin,
}: {
  isPanelAdmin: boolean;
}) {
  const navigate = useNavigate();
  const { data: eventsForCalendar } = useQuery({
    queryKey: ["eventsForCalendar"],
    queryFn: () => getEventsForCalendar(),
    staleTime: 0,
  });

  function getToday() {
    const today = new Date();
    return today.toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }
  const today = getToday();

  return (
    <div className="bg-darkBlueDP md:w-2/3 m-large md:my-8 md:mx-auto">
      <ButtonDefault
        className={isPanelAdmin ? "" : "hidden"}
        onClick={() => navigate("/admin/events/create-update")}
      >
        Créer un nouvel évènement
      </ButtonDefault>
      <div className="flex justify-between mt-6">
        <p className="mb-4 text-sm sm:text-base bg-hoverBlueDP p-1 rounded">
          Date du jour :{" "}
          <span style={{ textTransform: "capitalize" }}>{today}</span>
        </p>
        <Link to={isPanelAdmin ? "/admin/events" : "/events"}>
          <FontAwesomeIcon icon={faList} size="xl" />
        </Link>
      </div>
      {eventsForCalendar ? (
        <Calendar
          eventsForCalendar={eventsForCalendar}
          isPanelAdmin={isPanelAdmin}
        />
      ) : (
        <p>Aucun événement à afficher</p>
      )}
      <div className="my-4">
        <p className="flex gap-2">
          <img src={openEvent} alt="" /> Besoin de bénévoles
        </p>
        <p className="flex gap-2">
          <img src={closeEvent} alt="" /> Événement complet
        </p>
      </div>
    </div>
  );
}
