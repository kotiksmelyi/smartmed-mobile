import { DoctorUrls } from '@utils/routes';

import {
  $patientsList,
  fetchPatientsListFx,
} from '@store/patients/patientsStore';

import { useStore } from 'effector-react';
import { FC, useEffect } from 'react';
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
  useEffect(() => {
    fetchPatientsListFx().then();
  }, []);

  const users = useStore($patientsList);
  return (
    <div className={styles.wrapper}>
      <div className={styles.headwrapper}>
        <h1>Пациенты</h1>
        {/*<Link to={'*'}>+</Link>*/}
      </div>
      {users.map((user, index) => (
        <div key={index} className={styles.cardwrapper}>
          <div>
            <h4>{user.name}</h4>
            <p>{user.birthdate}</p>
          </div>
          <h4>{user.diagnosis}</h4>
          <Link to={DoctorUrls.PATIENTS + '/' + user.id}>Открыть инфо</Link>
        </div>
      ))}
    </div>
  );
};
