import { HeatMap } from '@components/heat-map/HeatMap';

import testTempData from '@utils/heat-map/heatMapTest.json';
import { GlobalUrls } from '@utils/routes';

import { FC } from 'react';
import { Link } from 'react-router-dom';

export const NotFound: FC = () => {
  return (
    <>
      <div>404 Not Found</div>
      <HeatMap data={testTempData} />
      <Link className='button' to={GlobalUrls.MAIN}>
        Вернуться на главную
      </Link>
    </>
  );
};
