import { BodyHeader } from '@components/body/BodyHeader';

import { FC } from 'react';

import styles from './doctornewquiz.module.scss';

export const DoctorNewQuiz: FC = () => {
  return (
    <div className={styles.wrapper}>
      <h1>Новая анкета</h1>

      <form>
        <div className={styles.cardwrapper}>
          <BodyHeader text='Название анкеты' />
          <input type='text' />
        </div>

        <div className={styles.cardwrapper}>
          <BodyHeader text='Вопрос 1' />
          <div>
            <input type='text' />
            <select>
              <option value='text'>Текст</option>
              <option value='range'>Шкала</option>
            </select>
          </div>
        </div>

        <div className={styles.cardwrapper}>
          <BodyHeader text='Название анкеты' />
          <input type='text' />
        </div>
      </form>
    </div>
  );
};
