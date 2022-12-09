import { DoctorCreateQuizFieldType } from '@type/doctor/doctor-create-quiz/doctorCreateQuizType';

import {
  $featureList,
  changeQuizField,
} from '@store/doctor/create-quiz/creatQuizStore';

import { useStore } from 'effector-react';
import React, { ChangeEvent, FC } from 'react';

type Props = {
  index: number;
  question: DoctorCreateQuizFieldType;
};

export const DoctorCreateQuizRangeField: FC<Props> = ({ index, question }) => {
  const handelInputChange =
    (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
      changeQuizField({ index, field: { ...question, [key]: e.target.value } });
    };
  const features = useStore($featureList);

  const handelFeature = (e: ChangeEvent<HTMLSelectElement>) => {
    changeQuizField({ index, field: { ...question, feature: e.target.value } });
  };

  return (
    <div>
      <div>
        <span>Dropdown</span>
        <select onChange={handelFeature}>
          {features.map((i, index) => (
            <option key={index} value={i}>
              {i}
            </option>
          ))}
        </select>
      </div>
      <div>
        <span>подпись к минимальному значению</span>
        <input
          defaultValue={question.min_label}
          onChange={handelInputChange('min_label')}
          type='text'
        />
      </div>
      <div>
        <span>минимальное значение</span>
        <input
          defaultValue={question.min_value}
          onChange={handelInputChange('min_value')}
          type='number'
        />
      </div>

      <div>
        <span>подпись к максимальному значению</span>
        <input
          defaultValue={question.max_label}
          onChange={handelInputChange('max_label')}
          type='text'
        />
      </div>
      <div>
        <span>максимальное значение</span>
        <input
          defaultValue={question.max_value}
          onChange={handelInputChange('max_value')}
          type='number'
        />
      </div>
    </div>
  );
};
