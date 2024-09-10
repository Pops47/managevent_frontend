import {
  Dialog,
  DialogBody,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import closeEventLine from "../../assets/closeEventLine.svg";
import close_icon from "../../assets/close_icon.svg";
import openEventLine from "../../assets/openEventLine.svg";
import { EventForCalendarInterface } from "../../services/interfaces/EventInterface";

type DialogEventDetailProps = {
  handleOpen: () => void;
  open: boolean;
  eventDate: Date | string;
  eventsByDate: EventForCalendarInterface[];
  isPanelAdmin: boolean;
};

export default function DialogEventDetail({
  isPanelAdmin,
  handleOpen,
  open,
  eventDate,
  eventsByDate,
}: DialogEventDetailProps) {
  const navigate = useNavigate();
  return (
    <Dialog open={open} handler={handleOpen}>
      <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
        <img src={close_icon} alt="" />
      </button>
      <DialogHeader className="flex justify-center">
        <Typography color="white" className="mb-2">
          {String(eventDate)}
        </Typography>
      </DialogHeader>
      <hr className="w-3/4 m-auto border-dashed" />
      <DialogBody className="m-auto ">
        {eventsByDate.map((event, index) => (
          <div key={index} className="flex  items-center p-2">
            {event.status === "Incomplete" && (
              <img src={openEventLine} alt="" />
            )}
            {event.status === "Complete" && <img src={closeEventLine} alt="" />}
            <Typography
              onClick={() => {
                isPanelAdmin
                  ? navigate(`/admin/events/create-update/${event.id}`)
                  : navigate(`/events/${event.id}`);
              }}
              variant="h5"
              className="mb-2 text-2xl font-bold ml-5 cursor-pointer hover:text-orangeDP"
            >
              {event.title}
            </Typography>
          </div>
        ))}
      </DialogBody>
    </Dialog>
  );
}
