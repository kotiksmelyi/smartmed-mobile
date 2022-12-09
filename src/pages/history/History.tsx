import { BodyHeader } from '@components/body/BodyHeader';
import { Header } from '@components/header/Header';

import { ClientUrls } from '@utils/routes';

import { $quizHistory, fetchQuizHistoryFx } from '@store/client/quiz/quizStore';

import { historyData } from './historyData';
import { DatePicker } from 'antd';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export function History() {
  useEffect(() => {
    fetchQuizHistoryFx().then();
  }, []);

  const history = useStore($quizHistory);
  if (!history) return null;
  return (
    <>
      <Header text={'Дневник '} />
      <BodyHeader text={'Ваши последние записи и анкеты'} />

      <div className='select'>
        {history.items.map((note) => (
          <div key={note.id}>
            <Link to={ClientUrls.HISTORY + '/' + note.id}>
              <div className='select__container'>
                <h1>{note.name}</h1>
                <div>{new Date(note.created_at).toLocaleDateString()}</div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
