import { TITLE } from '../const/page-title';
import { Link } from 'react-router-dom';
import styles from './Pages.module.scss';

export const NotFound = () => {
  return (
    <div className={styles.not_found_page}>
      <h2>{TITLE[404]}</h2>
      <Link to="/" className={styles.main_link}>
        main
      </Link>
    </div>
  );
};
