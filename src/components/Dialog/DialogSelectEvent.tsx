import {
  Dialog,
  DialogHeader,
  DialogBody,
  Typography
} from '@material-tailwind/react';
import close_icon from '../../assets/close_icon.svg';
import { useState } from 'react';
import closeEventLine from '../../assets/closeEventLine.svg';
import openEventLine from '../../assets/openEventLine.svg';
import { useNavigate } from 'react-router-dom';
import { dayDate } from '../../services/utils/DateDayFrFormat';
import { GoupPropsType } from '../../services/interfaces/EventInterface';
import CardEvent from '../CardEvent';

export function DialogSelectEvent({ group }: GoupPropsType) {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleOpen = () => setOpen(!open);

  const eventdate = dayDate(group.date);

  return (
    <>
      <CardEvent onClick={handleOpen} group={group} />

      <Dialog open={open} handler={handleOpen}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <DialogHeader className="flex justify-center">
          <Typography color="white" className="mb-2">
            {String(eventdate)}
          </Typography>
        </DialogHeader>
        <hr className="w-3/4 m-auto border-dashed" />
        <DialogBody className="m-auto ">
          {group.events.map((event, index) => (
            <div key={index} className="flex  items-center p-2">
              {event.status === 'Incomplete' && (
                <img src={openEventLine} alt="" />
              )}
              {event.status === 'complete' && (
                <img src={closeEventLine} alt="" />
              )}
              <Typography
                onClick={() => navigate(`/events/${event.id}`)}
                variant="h5"
                className="mb-2 text-2xl font-bold ml-5 cursor-pointer hover:text-orangeDP"
              >
                {event.title}
              </Typography>
            </div>
          ))}
        </DialogBody>
      </Dialog>
    </>
  );
}
