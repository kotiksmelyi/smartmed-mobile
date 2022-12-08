import styles from '@pages/doctor-create-quiz/doctornewquiz.module.scss';

import { BodyHeader } from '@components/body/BodyHeader';

import React, { FC } from 'react';

type Props = {
  question: any;
  field: any;
};
export const DoctorCreateQuizField: FC<Props> = ({ field }) => {
  return (
    <div className={styles.cardwrapper}>
      <BodyHeader text='Вопрос 1' />
      <div>
        <input placeholder='Текст вопроса' type='text' {...field} />
        <select {...field('questions.0.type')}>
          <option value='textarea'>Текст</option>
          <option value='range'>Шкала</option>
        </select>
      </div>
    </div>
  );
};
