import { Card, CardBody, Typography } from "@material-tailwind/react";
import closeEvent from "../assets/closeEvent.svg";
import openEvent from "../assets/openEvent.svg";
import { CardEventPropsType } from "../services/interfaces/EventInterface";

export default function CardEvent({ group, onClick }: CardEventPropsType) {
  return (
    <>
      <Card onClick={onClick} className="border-dp mb-small cursor-pointer">
        <CardBody className="mb-2">
          <Typography color="white" className="mb-2">
            {group.date}
          </Typography>
          {group.events.map((event, index) => (
            <div key={index} className="flex justify-center">
              <Typography variant="h5" className="text-center mr-5 ">
                {event.title}
              </Typography>
              {event.status === "Incomplete" && <img src={openEvent} alt="" />}
              {event.status === "Complete" && <img src={closeEvent} alt="" />}
            </div>
          ))}
        </CardBody>
      </Card>
    </>
  );
}
