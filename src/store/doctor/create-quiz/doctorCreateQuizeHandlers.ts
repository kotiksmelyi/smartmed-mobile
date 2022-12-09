import {
  ChangeQuizField,
  DoctorCreateQuizFieldType,
} from '@type/doctor/doctor-create-quiz/doctorCreateQuizType';

import { initValue } from '@store/doctor/create-quiz/creatQuizStore';

import produce from 'immer';

export const handelAddQuiz = (state: DoctorCreateQuizFieldType[]) => {
  return produce(state, (draft) => {
    const value = initValue[0];
    const lastItemOrder = draft.at(-1)?.order || 0;
    draft.push({ ...value, order: lastItemOrder + 1 });
  });
};
export const handelChangeQuiz = (
  state: DoctorCreateQuizFieldType[],
  payload: ChangeQuizField
) => {
  return produce(state, (draft) => {
    draft[payload.index] = payload.field;
  });
};

export const handelRemoveQuiz = (
  state: DoctorCreateQuizFieldType[],
  index: number
) => {
  return produce(state, (draft) => {
    draft.splice(index, 1);
  });
};
