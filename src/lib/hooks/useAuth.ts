import { GlobalUrls } from '@utils/routes';

import { LOCAL_TOKEN_KEY } from '@store/auth/authStore';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem(LOCAL_TOKEN_KEY);
    if (!token) {
      navigate(GlobalUrls.LOGIN);
    }
  }, [navigate]);
};
