import { http } from '@server/http';
import { urls } from '@server/urls';

import {
  ChangeQuizField,
  DoctorCreateQuizFieldType,
  PostDoctorQuiz,
} from '@type/doctor/doctor-create-quiz/doctorCreateQuizType';

import {
  handelAddQuiz,
  handelChangeQuiz,
  handelRemoveQuiz,
} from '@store/doctor/create-quiz/doctorCreateQuizeHandlers';

import {
  attach,
  createEffect,
  createEvent,
  createStore,
  forward,
} from 'effector';

export const initValue: DoctorCreateQuizFieldType[] = [
  {
    type: 'textarea',
    text: '',
    order: 1,
    feature: '',
    min_label: 'Плохо',
    max_label: 'Хорошо',
    min_value: 1,
    max_value: 10,
  },
];

export const addQuizField = createEvent();
export const removeQuizField = createEvent<number>();
export const changeQuizField = createEvent<ChangeQuizField>();
export const clearQuizFields = createEvent();
export const $createQuizFields = createStore<DoctorCreateQuizFieldType[]>(
  initValue
)
  .on(addQuizField, handelAddQuiz)
  .on(removeQuizField, handelRemoveQuiz)
  .on(changeQuizField, handelChangeQuiz)
  .reset(clearQuizFields);

export const createQuizFx = attach({
  source: $createQuizFields,
  mapParams: (name: string, questions: DoctorCreateQuizFieldType[]) => ({
    name,
    questions,
  }),
  effect: createEffect(async (data: PostDoctorQuiz) => {
    await http.post(urls.quiz(), data);
  }),
});

forward({
  from: createQuizFx.doneData,
  to: clearQuizFields,
});
