import { http } from '@server/http';
import { urls } from '@server/urls';

import { QuizType } from '@type/doctor/quiz/quizType';
import { Page } from '@type/server/serverType';

import { createEffect, createStore } from 'effector';

export const fetchQuizListFx = createEffect(async () => {
  const res = await http.get<Page<QuizType>>(urls.quiz());
  return res.data;
});

export const $quizList = createStore<Page<QuizType> | null>(null).on(
  fetchQuizListFx.doneData,
  (_, payload) => payload
);
