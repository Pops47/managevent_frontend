import React from 'react';
import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter
} from '@material-tailwind/react';
import bubble_message from '../../assets/bubble_message.svg';
import close_icon from '../../assets/close_icon.svg';
import { TaskInfosPropsType } from '../RadioDefault';
import ButtonDefault from '../ButtonDefault';

export type DialogDetailTaskPropsType = {
  taskInfos: TaskInfosPropsType;
};

export function DialogDetailTask({ taskInfos }: DialogDetailTaskPropsType) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <button type="button" onClick={handleOpen}>
        <img src={bubble_message} alt="" />
      </button>
      <Dialog open={open} handler={handleOpen}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <div className="flex flex-col items-center gap-6">
          <DialogHeader>{taskInfos.name} </DialogHeader>
          <DialogBody>{taskInfos.description}</DialogBody>
          <DialogFooter>
            <ButtonDefault onClick={handleOpen}>
              Retour à l'évènement
            </ButtonDefault>
          </DialogFooter>
        </div>
      </Dialog>
    </>
  );
}
