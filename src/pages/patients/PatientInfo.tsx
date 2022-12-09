import { BodyHeader } from '@components/body/BodyHeader';

import { FC } from 'react';

import styles from './patientinfo.module.scss';

export const PatientInfo: FC = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <BodyHeader text='История заполненных анкет пациента' />
      </div>
    </div>
  );
};
