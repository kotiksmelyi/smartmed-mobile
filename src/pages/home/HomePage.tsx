import { useAuthNavigate } from '@hooks/auth/useAuthNavigate';

import { $userRole } from '@store/auth/authStore';

import { useStore } from 'effector-react';
import React, { useEffect } from 'react';

export const HomePage = () => {
  const navigate = useAuthNavigate();
  const role = useStore($userRole);
  useEffect(() => {
    navigate(role);
  }, [navigate, role]);

  return <div></div>;
};
