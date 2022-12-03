import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

const DoctorLayout: FC = () => {
  return (
    <div>
      <Header text={'Doctor'} />
      <BodyHeader text={'July'} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DoctorLayout;
