import React from 'react';
import { Dialog, DialogBody, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../ButtonDefault';
import close_icon from '../../assets/close_icon.svg';

export type DialogUnsubscribeEventTypeProps = {
  handleDelete: () => void;
};

export function DialogUnsubscribeEvent({
  handleDelete
}: DialogUnsubscribeEventTypeProps) {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <ButtonDefault onClick={handleOpen} variant="secondary">
        Se désinscrire
      </ButtonDefault>
      <Dialog open={open} handler={handleOpen}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <DialogBody>
          Êtes-vous sûr de vouloir vous désinscrire de l'évènement ?
        </DialogBody>
        <DialogFooter>
          <ButtonDefault onClick={handleDelete}>Confirmer</ButtonDefault>
          <ButtonDefault onClick={handleOpen} variant="secondary">
            Annuler
          </ButtonDefault>
        </DialogFooter>
      </Dialog>
    </>
  );
}
