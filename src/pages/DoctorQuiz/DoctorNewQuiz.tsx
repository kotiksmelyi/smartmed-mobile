import { BodyHeader } from '@components/body/BodyHeader';
import { RangeInput } from '@components/quiz/RangeInput';

import { FC } from 'react';

import styles from './doctornewquiz.module.scss';

const testDataSympthoms = [
  'Головная боль',
  'Боль в другом месте',
  'Температура',
];

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
              <option value='textarea'>Текст</option>
              <option value='range'>Шкала</option>
            </select>
          </div>
        </div>
        <div className={styles.cardwrapper}>
          <BodyHeader text='Вопрос 2' />
          <div className={styles.headwrapper}>
            <input placeholder='Текст вопроса' type='text' />
            <select>
              <option value='textarea'>Текст</option>
              <option value='range'>Шкала</option>
            </select>

            <div className={styles.rangewrapper}>
              <select></select>
              <RangeInput />
            </div>

          </div>
        </div>
        <button>+</button>
        <button className={styles.submit}>Сохранить</button>
      </form>
    </div>
  );
};
