import { BodyHeader } from '@components/body/BodyHeader';
import { Header } from '@components/header/Header';

import { ClientUrls } from '@utils/routes';

import { historyData } from './historyData';
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';

export function History() {
  const { RangePicker } = DatePicker;
  return (
    <>
      <Header text={'Дневник '} />
      <BodyHeader text={'Ваши последние записи и анкеты'} />
      <div className='select__home'>
        <h5>Отобразить период:</h5>
        <RangePicker />
      </div>
      <div className='select'>
        {historyData.map((note) => (
          <>
            <p>{note.date}</p>
            <Link to={ClientUrls.PRESCRIPTION}>
              <div className='select__container' key={note.id}>
                {note.recommendations ? (
                  <h1>Рекомендации выполнены</h1>
                ) : (
                  <h1>Рекомендации не выполнены</h1>
                )}
              </div>
            </Link>
            <Link to={ClientUrls.QUIZ}>
              <div className='select__container'>
                {note.quiz ? (
                  <h1>Анкета заполнена</h1>
                ) : (
                  <h1>Анкета не заполнена</h1>
                )}
              </div>
            </Link>
          </>
        ))}
      </div>
    </>
  );
}
