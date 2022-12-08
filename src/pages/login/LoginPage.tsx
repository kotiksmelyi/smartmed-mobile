import { AppLogo } from '@components/UI/icons/logo/AppLogo';

import { useAuthNavigate } from '@hooks/auth/useAuthNavigate';

import { LoginApiProps } from '@type/auth/authType';

import { loginFx, setUserRole } from '@store/auth/authStore';

import { FC } from 'react';
import { useForm } from 'react-hook-form';

import styles from './loginpage.module.scss';

export const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm<LoginApiProps>();
  const navigate = useAuthNavigate();

  const login = async (data: LoginApiProps) => {
    const res = await loginFx(data);
    setUserRole(res.role);
    navigate(res.role);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <AppLogo />
      </div>
      <h1>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit(login)}>
        <input type='text' {...register('username')} />
        <input type='password' {...register('password')} />
        <a href='/'>Забыли пароль?</a>
        <button>Войти</button>
      </form>
    </div>
  );
};
