import { DoctorCreateQuizFieldType } from '@type/doctor-create-quiz/doctorCreateQuizType';

import { changeQuizField } from '@store/doctor-create-quiz/creatQuizStore';

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

  return (
    <div>
      <div>
        <span>min_value</span>
        <input
          defaultValue={question.min_value}
          onChange={handelInputChange('min_value')}
          type='number'
        />
      </div>
      <div>
        <span>max_value</span>
        <input
          defaultValue={question.max_value}
          onChange={handelInputChange('max_value')}
          type='number'
        />
      </div>

      <div>
        <span>min_label</span>
        <input
          defaultValue={question.min_label}
          onChange={handelInputChange('min_label')}
          type='text'
        />
      </div>

      <div>
        <span>max_label</span>
        <input
          defaultValue={question.max_label}
          onChange={handelInputChange('max_label')}
          type='text'
        />
      </div>
    </div>
  );
};
