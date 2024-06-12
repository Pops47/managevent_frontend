import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import closeEvent from "../../assets/closeEvent.svg";
import openEvent from "../../assets/openEvent.svg";
import ButtonDefault from "../../components/ButtonDefault";
import EventCardList from "../../components/EventCardList";

export default function EventsPage({
  isPanelAdmin,
}: {
  isPanelAdmin: boolean;
}) {
  const navigate = useNavigate();
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
    <div className="flex flex-col md:w-2/3 m-large md:my-8 md:mx-auto gap-4 ">
      <ButtonDefault
        className={isPanelAdmin ? "" : "hidden"}
        onClick={() => navigate("/admin/events/create-update")}
      >
        Créer un nouvel évènement
      </ButtonDefault>
      <div className="flex justify-between mt-2">
        <p className="mb-4 bg-hoverBlueDP p-1 rounded">
          Date du jour :{" "}
          <span style={{ textTransform: "capitalize" }}>{today}</span>
        </p>
        <Link to={isPanelAdmin ? "/admin/events/calendar" : "/events/calendar"}>
          <FontAwesomeIcon icon={faCalendarDays} size="xl" />
        </Link>
      </div>
      <EventCardList isPanelAdmin={isPanelAdmin} />
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
