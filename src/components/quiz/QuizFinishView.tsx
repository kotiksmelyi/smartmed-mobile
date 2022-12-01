import { BodyHeader } from '@components/body/BodyHeader';

import React from 'react';
import { Link } from 'react-router-dom';

const QuizFinishView = () => {
  return (
    <>
      <BodyHeader text={'Анкета отправлена!'} />
      <div className='finished'>
        <h1>Спасибо за заполнение анкеты!</h1>
        <Link className='button' to='/'>
          Вернуться на главную
        </Link>
      </div>
    </>
  );
};

export default QuizFinishView;
