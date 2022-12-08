import { extent, scaleLinear, scaleTime, timeFormat } from 'd3';
import { FC } from 'react';

import styles from './heat-map.module.scss';

type Props = {
  data: {
    id: string;
    date: string;
    label: string;
    percent: number;
  }[];
};

const getColor = scaleLinear<string, number>()
  .range(['green', 'red'])
  .domain([1, 100]);

const format = timeFormat('%m %d');

const margin = { top: 30, right: 30, bottom: 30, left: 30 };
const width = 450 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

export const HeatMap: FC<Props> = ({ data }) => {
  const dateScale = scaleTime()
    .domain(extent(data, (d) => d.date).map((i) => new Date(i as string)))
    .rangeRound([margin.left, width]);

  // const labelScale = scaleLinear().domain().range([margin.left, height]);

  return (
    <div className={styles.heatMap}>
      <svg width={width} height={height}>
        <g>
          {dateScale.ticks().map((date, index) => {
            return (
              <text
                key={index}
                className={styles.heatMap__axis}
                y={40}
                x={dateScale(date)}
              >
                {format(date)}
              </text>
            );
          })}
        </g>
        <g>
          {dateScale.ticks().map((date, index) => {
            return (
              <text
                key={index}
                className={styles.heatMap__axis}
                y={40}
                x={dateScale(date)}
              >
                {format(date)}
              </text>
            );
          })}
        </g>
      </svg>
    </div>
  );
};
