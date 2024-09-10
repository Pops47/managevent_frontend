import { Dialog, DialogHeader, DialogFooter } from '@material-tailwind/react';
import ButtonDefault from '../ButtonDefault';
import close_icon from '../../assets/close_icon.svg';
import { deleteUser } from '../../services/api/user';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function DialogDeleteUser() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(!open);

  const handleDelete = async () => {
    await deleteUser();
    navigate('/');
    localStorage.removeItem('authToken');
  };
  return (
    <>
      <ButtonDefault variant="delete" onClick={handleOpen}>
        Supprimer mon compte
      </ButtonDefault>

      <Dialog open={open} handler={handleOpen}>
        <button onClick={handleOpen} className="flex justify-end mr-3 mt-3">
          <img src={close_icon} alt="" />
        </button>
        <DialogHeader>
          Êtes vous sur de vouloir supprimer votre compte ?
        </DialogHeader>
        <DialogFooter>
          <ButtonDefault onClick={handleDelete}>Valider</ButtonDefault>
          <ButtonDefault variant="secondary" onClick={handleOpen}>
            Annuler
          </ButtonDefault>
        </DialogFooter>
      </Dialog>
    </>
  );
}
