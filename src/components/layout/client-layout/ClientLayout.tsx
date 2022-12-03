import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './client-layout.module.scss';

const ClientLayout: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Header text={'Client'} />
      <div className={styles.body}>
        <BodyHeader text={'July'} />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default ClientLayout;
