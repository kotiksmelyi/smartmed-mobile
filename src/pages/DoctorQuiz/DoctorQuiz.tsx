import { FC } from 'react';

import styles from './doctorquiz.module.scss';

export const DoctorQuiz: FC = () => {
  const testData = [
    {
      id: 5,
      title: 'Общее самочувствие',
      questions: 5,
      diagnosis: 'J03.9 — Острый тонзиллит',
    },
    {
      id: 6,
      title: 'Детальный опрос',
      questions: 15,
      diagnosis: 'J03.9 — Острый тонзиллит',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.headwrapper}>
        <h1>Мои анкеты</h1>
        <button>+</button>
      </div>
      {testData.map((option) => (
        <div key={option.id} className={styles.cardwrapper}>
          <div>
            <h4>{option.title}</h4>
            <p>Кол-во вопросов: {option.questions}</p>
          </div>
          <h4>{option.diagnosis}</h4>
          <button>Открыть инфо</button>
        </div>
      ))}
    </div>
  );
};
