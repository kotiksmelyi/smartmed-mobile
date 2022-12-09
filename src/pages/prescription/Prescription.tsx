import { BodyHeader } from '@components/body/BodyHeader';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';

import { Checkbox } from 'antd';
//@ts-ignore
import DatePicker from 'react-horizontal-datepicker';

const prescriptionData = [
  {
    id: 1,
    text: 'Полоскание горла 3 раза в день',
  },
  {
    id: 2,
    text: 'Гексорал 2 раза в день',
  },
];

export function Prescription() {
  return (
    <>
      <Header text={'Назначения'} />
      <BodyHeader text={'Отмечайте выполнение рекомендаций врача'} />
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
