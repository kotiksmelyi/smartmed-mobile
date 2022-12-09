import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './patients.module.scss';

const testData = [
  {
    name: 'Тимур',
    birthday: '20.04.2002',
    diagnosis: 'J03.9 — Острый тонзиллит',
  },
  {
    name: 'Алексей',
    birthday: '1.01.2001',
    diagnosis: 'Фарингит',
  },
];

export const Patients: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.headwrapper}>
        <h1>Пациенты</h1>
        <Link to={'*'}>+</Link>
      </div>
      {testData.map((option, index) => (
        <div key={index} className={styles.cardwrapper}>
          <div>
            <h4>{option.name}</h4>
            <p>{option.birthday}</p>
          </div>
          <h4>{option.diagnosis}</h4>
          <Link to={'/doctor/patientinfo'}>Открыть инфо</Link>
        </div>
      ))}
    </div>
  );
};
