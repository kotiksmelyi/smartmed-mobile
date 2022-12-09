import { GlobalUrls } from '@utils/routes';

import { JwtType } from '@type/auth/authType';

import { LOCAL_TOKEN_KEY, setUserRole } from '@store/auth/authStore';
import { connect } from '@store/ws/socketStore';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useAuth = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const tokenString = localStorage.getItem(LOCAL_TOKEN_KEY);
    if (!tokenString) {
      navigate(GlobalUrls.LOGIN);
    } else {
      const token: JwtType = JSON.parse(tokenString || '');
      setUserRole(token.role);
      connect();
    }
  }, [navigate]);
};
