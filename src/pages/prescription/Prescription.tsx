import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

import { Checkbox } from 'antd';
//@ts-ignore
import DatePicker from 'react-horizontal-datepicker';

const prescriptionData = [
  {
    id: 1,
    text: 'Дед пей таблетки, а то получишь по жопе',
  },
  {
    id: 2,
    text: 'Дед пей жопку, а то получишь таблетки',
  },
];

export function Prescription() {
  return (
    <>
      <DatePicker color='#00ABB5' />
      <div className='select'>
        <div className='select__container'>
          <Checkbox.Group
            options={prescriptionData.map((option) => option.text)}
          />
        </div>
      </div>
    </>
  );
}
