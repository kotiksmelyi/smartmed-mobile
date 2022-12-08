import { BodyHeader } from '@components/body/BodyHeader';
import { RangeInput } from '@components/quiz/RangeInput';

import { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import styles from './doctornewquiz.module.scss';

const quizdataDoc = {
  name: 'string',
  questions: [
    {
      type: 'textarea',
      text: 'string',
      order: 0,
      feature: 'string',
      min_label: 'string',
      max_label: 'string',
    },
  ],
};

const testDataSympthoms = [
  'Головная боль',
  'Боль в другом месте',
  'Температура',
];

export const DoctorNewQuiz: FC = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className={styles.wrapper}>
      <h1>Новая анкета</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.cardwrapper}>
          <BodyHeader text='Название анкеты' />
          <input
            type='text'
            placeholder='Введите название анкеты'
            {...register('name')}
          />
        </div>

        <div className={styles.cardwrapper}>
          <BodyHeader text='Вопрос 1' />
          <div>
            <input
              placeholder='Текст вопроса'
              type='text'
              {...register('questions.0.text')}
            />
            <select {...register('questions.0.type')}>
              <option value='textarea'>Текст</option>
              <option value='range'>Шкала</option>
            </select>
          </div>
        </div>

        <div className={styles.cardwrapper}>
          <BodyHeader text='Вопрос 2' />
          <div className={styles.headwrapper}>
            <input
              placeholder='Текст вопроса'
              type='text'
              {...register('questions.1.text')}
            />
            <select {...register('questions.1.type')}>
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
