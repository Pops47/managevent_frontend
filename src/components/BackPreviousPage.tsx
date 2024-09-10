import { Link } from 'react-router-dom';
import BackIcon from '../assets/back-icon.svg';

export type BackPreviousPagePropsTupe = {
  path: string;
};

export default function BackPreviousPage({ path }: BackPreviousPagePropsTupe) {
  return (
    <Link to={path}>
      <div className="flex pt-2 mt-2 ml-2">
        <img src={BackIcon} alt="" />
        <p>Retour</p>
      </div>
    </Link>
  );
}
