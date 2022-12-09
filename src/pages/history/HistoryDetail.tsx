import { BodyHeader } from '@components/body/BodyHeader';
import { Header } from '@components/header/Header';

import {
  $quizHistoryDetail,
  fetchQuizHistoryDetailFx,
} from '@store/client/quiz/quizStore';

import { useStore } from 'effector-react';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export const HistoryDetail = () => {
  const { id } = useParams();

  const detail = useStore($quizHistoryDetail);

  useEffect(() => {
    fetchQuizHistoryDetailFx(id as string).then();
  }, [id]);

  return (
    <>
      <Header text={'Дневник '} />
      {detail && (
        <>
          <BodyHeader text={detail.name} />
          <p style={{ margin: 10 }}>{detail.created_at}</p>
          {detail.completed_questions.map((i) => {
            return (
              <div className='select'>
                <div className='select__container'>
                  <h2>{i.text}</h2>
                  <div>{i.answer}</div>
                  {i.type === 'range' && (
                    <div>
                      <div>
                        {i.min_value} - {i.min_label}
                      </div>
                      <div>
                        {i.max_value} - {i.max_label}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
