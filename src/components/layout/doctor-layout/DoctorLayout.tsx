import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './doctor-layout.module.scss';

const DoctorLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>ASIDE</div>
      <img src='./logos/arrow.svg' className={styles.arrow} />
      <div className={styles.main}>
        <nav className={styles.nav}>NAVIGATION</nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorLayout;
