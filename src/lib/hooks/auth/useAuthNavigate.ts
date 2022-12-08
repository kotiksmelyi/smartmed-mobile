import { ClientUrls, DoctorUrls } from '@utils/routes';

import { UserRole } from '@type/auth/authType';

import { useNavigate } from 'react-router-dom';

export const useAuthNavigate = () => {
  const nav = useNavigate();

  return (role: UserRole) => {
    if (role === UserRole.doctor) {
      nav(DoctorUrls.MAIN);
    }

    if (role === UserRole.client) {
      nav(ClientUrls.MAIN);
    }
  };
};
