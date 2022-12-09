import { http } from '@server/http';
import { urls } from '@server/urls';

import { IQuizData, QuizCompletedType } from '@utils/quiz/testData';

import { createEffect, createStore } from 'effector';

export const fetchQuizFx = createEffect(async (id: string) => {
  const response = await http.get(urls.quizId(id));
  return response.data;
});

export const $quiz = createStore<IQuizData | null>(null).on(
  fetchQuizFx.doneData,
  (_, payload) => payload
);

export const sendQuizAnswersFx = createEffect(
  async (data: QuizCompletedType) => {
    await http.post(urls.quizCompleted(), data);
  }
);
