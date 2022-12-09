import { Header } from '@components/header/Header';

import {
  $featureList,
  featureFeatureListFx,
} from '@store/doctor/create-quiz/creatQuizStore';
import { $socket } from '@store/ws/socketStore';

import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

export const SendAlert = () => {
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    featureFeatureListFx().then();
  }, []);

  const features = useStore($featureList);
  const socket = useStore($socket);

  const onSubmit = (value: any) => {
    socket?.send(
      JSON.stringify({
        type: 'client_send',
        data: value,
      })
    );
  };

  return (
    <div>
      <Header text={'Экстренный вызов'} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <select {...register('title')}>
          {features.map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
        <input type='textarea' {...register('description')} />
        <button>Отправить</button>
      </form>
    </div>
  );
};
