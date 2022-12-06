import { doctorLayoutData } from './doctor-layout-data';
import { FC } from 'react';
import { Link, Outlet } from 'react-router-dom';

import styles from './doctor-layout.module.scss';

const DoctorLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aside}>
        <img className={styles.aside_logo} src='./logos/logo-smartmed.svg' />
        <div className={styles.link_container}>
          {doctorLayoutData.map((menu, index) => (
            <Link to={`/doctor${menu.path}`} key={index}>
              <img src={`./logos/${menu.src}.svg`} />
              <span>{menu.title}</span>
            </Link>
          ))}
        </div>
      </div>
      <div className={styles.main}>
        <nav className={styles.nav}>
          <img className={styles.avatar} src='./logos/test-img.jpg' />
          <div className={styles.avatar_text}>
            <h5>Виталий Врач</h5>
            <a>Выйти</a>
          </div>
          <img className={styles.bell} src='./logos/notification.svg' alt='' />
          <div className={styles.bell_counter}>1</div>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

export default DoctorLayout;
