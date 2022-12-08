import { FC } from 'react';

import styles from './rangeinput.module.scss';

export const RangeInput: FC = () => {
  return (
    <div className={styles.rangeinput}>
      <div className={styles.rangeinput_unit}>
        от <input type='text' placeholder='1' />
        <input type='text' placeholder='Плохо' />
      </div>
      <div>
        до <input type='text' placeholder='10' />
        <input type='text' placeholder='Хорошо' />
      </div>
    </div>
  );
};
