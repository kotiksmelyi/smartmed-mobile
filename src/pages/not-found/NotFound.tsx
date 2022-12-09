
import { GlobalUrls } from '@utils/routes';

import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <>
      <div>404 Not Found</div>
      <Link className='button' to={GlobalUrls.MAIN}>
        Вернуться на главную
      </Link>
    </>
  );
};
