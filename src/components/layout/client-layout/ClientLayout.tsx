import { Footer } from '@components/footer/Footer';

import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './client-layout.module.scss';

const ClientLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Outlet />
      <Footer />
    </div>
  );
};

export default ClientLayout;
