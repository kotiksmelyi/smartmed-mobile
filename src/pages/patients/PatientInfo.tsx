import { History } from '@pages/history/History';

import { BodyHeader } from '@components/body/BodyHeader';

import { DoctorUrls } from '@utils/routes';

import { $quizHistory, fetchQuizHistoryFx } from '@store/client/quiz/quizStore';
import {
  $patientInfo,
  fetchPatientInfoFx,
} from '@store/patients/patientsStore';

import { useStore } from 'effector-react';
import { FC, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import styles from './patientinfo.module.scss';

export const PatientInfo: FC = () => {
  const { id } = useParams();

  useEffect(() => {
    fetchPatientInfoFx(id as string).then();
    fetchQuizHistoryFx(id).then();
  }, [id]);

  const history = useStore($quizHistory);

  return (
    <div>
      <div>
        <BodyHeader text='История заполненных анкет пациента' />
        <div className={styles.wrapper}>
          <img
            className={styles.img}
            src={
              'http://78.140.241.21:8000/api/heatmap/?user_id=0c9c74b6-c120-4c50-861f-7d5d7129772e'
            }
          />
          <BodyHeader text={'Анкеты'} />
          {history?.items.map((i, key) => {
            return (
              <Link
                key={key}
                to={`${DoctorUrls.PATIENTS}/${id}/history/${i.id}`}
              >
                <div className={'select'}>
                  <div
                    className={'select__container'}
                    style={{ cursor: 'pointer' }}
                  >
                    <h4>{i.name}</h4>
                    <h4>{i.created_at}</h4>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};
