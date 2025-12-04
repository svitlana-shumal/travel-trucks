import { HashLoader } from 'react-spinners';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.backdrop}>
      <HashLoader color=" #e44848" />
    </div>
  );
}
