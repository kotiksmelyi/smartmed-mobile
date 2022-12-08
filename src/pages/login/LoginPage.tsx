import { AppLogo } from '@components/UI/icons/logo/AppLogo';

import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import styles from './loginpage.module.scss';

export const LoginPage: FC = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <div className={styles.logo}>
        <AppLogo />
      </div>
      <h1>Вход</h1>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <input type='text' {...register('login')} />
        <input type='password' {...register('password')} />
        <a href='/'>Забыли пароль?</a>
        <button>Войти</button>
      </form>
    </div>
  );
};
