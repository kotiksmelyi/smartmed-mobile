import {
  ChangeQuizField,
  DoctorCreateQuizFieldType,
} from '@type/doctor-create-quiz/doctorCreateQuizType';

import produce from 'immer';

export const handelAddQuiz = (
  state: DoctorCreateQuizFieldType[],
  payload: DoctorCreateQuizFieldType
) => {
  return produce(state, (draft) => {
    draft.push(payload);
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
