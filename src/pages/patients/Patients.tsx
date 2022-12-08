import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './patients.module.scss';

const testData = [
  {
    name: 'name',
    birthday: '20.04.2002',
    diagnosis: 'J03.9 — Острый тонзиллит',
  },
  {
    name: 'wrfqww',
    birthday: '1.01.2001',
    diagnosis: 'J03.9 — Острый тонзиллит',
  },
  {
    name: 'wewewe',
    birthday: '20.04.2002',
    diagnosis: 'J03.9 — Острый тонзиллит',
  },
  {
    name: 'name',
    birthday: '20.04.2002',
    diagnosis: 'J03.9 — Острый тонзиллит',
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
          <button>Открыть инфо</button>
        </div>
      ))}
    </div>
  );
};
