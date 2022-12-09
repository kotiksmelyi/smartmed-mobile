import { Input, notification } from 'antd';
import React, { FC } from 'react';
import { useForm } from 'react-hook-form';

type Props = {
  description: string;
};

export const DoctorNotification: FC<Props> = ({ description }) => {
  const { register, handleSubmit } = useForm();

  const submitForm = (value: any) => {
    notification.destroy(1);
  };

  return (
    <div onSubmit={handleSubmit(submitForm)}>
      <div>{description}</div>
      <form>
        <Input size={'large'} type='text' {...register('msg')} />
        <button>Ответить</button>
      </form>
    </div>
  );
};
