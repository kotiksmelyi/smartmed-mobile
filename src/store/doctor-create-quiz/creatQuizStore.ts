import {
  ChangeQuizField,
  DoctorCreateQuizFieldType,
} from '@type/doctor-create-quiz/doctorCreateQuizType';

import {
  handelAddQuiz,
  handelChangeQuiz,
} from '@store/doctor-create-quiz/doctorCreateQuizeHandlers';

import { attach, createEvent, createStore } from 'effector';
import { createEffect } from 'effector/effector.cjs';

export const addQuizField = createEvent<DoctorCreateQuizFieldType>();
export const changeQuizField = createEvent<ChangeQuizField>();
export const $createQuizFields = createStore<DoctorCreateQuizFieldType[]>([])
  .on(addQuizField, handelAddQuiz)
  .on(changeQuizField, handelChangeQuiz);

export const createQuizFx = attach({
  source: $createQuizFields,
  effect: createEffect((data: DoctorCreateQuizFieldType[]) => {
    console.log(data);
  }),
});
