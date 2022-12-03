import { historyData } from './historyData';
import { DatePicker } from 'antd';
import { Link } from 'react-router-dom';

export function History() {
  const { RangePicker } = DatePicker;
  return (
    <>
      <div className='select__home'>
        <h5>Отобразить период:</h5>
        <RangePicker />
      </div>
      <div className='select'>
        {historyData.map((note) => (
          <>
            <p>{note.date}</p>
            <Link to={'/prescription'}>
              <div className='select__container' key={note.id}>
                {note.recommendations ? (
                  <h1>Рекомендации выполнены</h1>
                ) : (
                  <h1>Рекомендации не выполнены</h1>
                )}
              </div>
            </Link>
            <Link to={'/quiz'}>
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
