import { DoctorCreateQuizField } from '@pages/doctor-create-quiz/fields/DoctorCreateQuizField';

import { BodyHeader } from '@components/body/BodyHeader';

import { DoctorUrls } from '@utils/routes';

import {
  $createQuizFields,
  addQuizField,
  createQuizFx,
} from '@store/doctor-create-quiz/creatQuizStore';

import { useList, useStore } from 'effector-react';
import { ChangeEvent, FC, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './doctornewquiz.module.scss';

export const DoctorNewQuiz: FC = () => {
  const questions = useList($createQuizFields, (question, key) => (
    <DoctorCreateQuizField index={key} question={question} key={key} />
  ));

  const quizNameInput = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const handelSubmit = async (e: ChangeEvent<EventTarget>) => {
    e.preventDefault();
    const quizName = quizNameInput.current?.value;
    await createQuizFx(quizName || '');
    navigate(DoctorUrls.MAIN);
  };

  const loading = useStore(createQuizFx.pending);

  return (
    <div className={styles.wrapper}>
      <h1>Новая анкета</h1>

      <form onSubmit={handelSubmit}>
        <div className={styles.cardwrapper}>
          <BodyHeader text='Название анкеты' />
          <input
            ref={quizNameInput}
            type='text'
            placeholder='Введите название анкеты'
          />
        </div>

        {questions}

        <button type={'button'} onClick={() => addQuizField()}>
          +
        </button>

        {loading && <div>Loading...</div>}
        <button className={styles.submit}>Сохранить</button>
      </form>
    </div>
  );
};
