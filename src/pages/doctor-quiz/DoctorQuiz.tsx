import { DoctorUrls } from '@utils/routes';

import { $quizList, fetchQuizListFx } from '@store/doctor/quiz/quizStore';

import { useStore } from 'effector-react';
import { FC, useEffect } from 'react';
import { Link } from 'react-router-dom';

import styles from './doctorquiz.module.scss';

export const DoctorQuiz: FC = () => {
  const list = useStore($quizList);

  useEffect(() => {
    fetchQuizListFx();
  }, []);

  if (!list) return null;

  if (list.items.length) return <div>Нет данных</div>;

  return (
    <div className={styles.wrapper}>
      <div className={styles.headwrapper}>
        <h1>Мои анкеты</h1>
        <Link to={DoctorUrls.CREAT_QUIZ}>+</Link>
      </div>
      {list.items.map((quiz) => (
        <div key={quiz.id} className={styles.cardwrapper}>
          <div>
            <h4>{quiz.name}</h4>
            <p>Кол-во вопросов: {quiz.address_count}</p>
          </div>
          <button>Открыть инфо</button>
        </div>
      ))}
    </div>
  );
};
