import styles from '@pages/doctor-create-quiz/doctornewquiz.module.scss';
import { DoctorCreateQuizRangeField } from '@pages/doctor-create-quiz/fields/DoctorCreateQuizRangeField';

import { BodyHeader } from '@components/body/BodyHeader';

import { DoctorCreateQuizFieldType } from '@type/doctor/doctor-create-quiz/doctorCreateQuizType';

import {
  changeQuizField,
  removeQuizField,
} from '@store/doctor/create-quiz/creatQuizStore';

import React, { ChangeEvent, FC, useCallback, useState } from 'react';

type Props = {
  question: DoctorCreateQuizFieldType;
  index: number;
};
export const DoctorCreateQuizField: FC<Props> = ({ question, index }) => {
  const handelInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeQuizField({ index, field: { ...question, text: e.target.value } });
  };

  const handelSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    changeQuizField({
      index,
      field: { ...question, type: e.target.value },
    });
  };

  return (
    <div className={styles.cardwrapper}>
      <BodyHeader text={'Вопрос ' + (index + 1)} />
      <button type={'button'} onClick={() => removeQuizField(index)}>
        -
      </button>
      <div>
        <input
          onChange={handelInputChange}
          placeholder='Текст вопроса'
          type='text'
        />
        <select onChange={handelSelectChange}>
          <option value='textarea'>Текст</option>
          <option value='range'>Шкала</option>
        </select>
        {question.type === 'range' && (
          <DoctorCreateQuizRangeField index={index} question={question} />
        )}
      </div>
    </div>
  );
};
