import { BodyHeader } from '@components/body/BodyHeader';

import { FC } from 'react';
import { useParams } from 'react-router-dom';

import styles from './patientinfo.module.scss';

export const PatientInfo: FC = () => {
  const { id } = useParams();
  return (
    <div className={styles.wrapper}>
      <div>
        <BodyHeader text='История заполненных анкет пациента' />
      </div>
    </div>
  );
};
