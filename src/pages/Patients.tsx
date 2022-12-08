import { HeatMap } from '@components/heat-map/HeatMap';

import testData from '@utils/heat-map/heatMapTest.json';

import { FC } from 'react';

export const Patients: FC = () => {
  return <HeatMap data={testData} />;
};
