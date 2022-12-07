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
          <input type='text' placeholder='Введите название анкеты' />
        </div>

        <div className={styles.cardwrapper}>
          <BodyHeader text='Вопрос 1' />
          <div>
            <input placeholder='Текст вопроса' type='text' />
            <select>
              <option value='text'>Текст</option>
              <option value='range'>Шкала</option>
            </select>
          </div>
        </div>
        <button>+</button>
        <button className={styles.submit}>Сохранить</button>
      </form>
    </div>
  );
};
