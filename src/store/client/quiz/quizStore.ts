import { http } from '@server/http';
import { urls } from '@server/urls';

import { IQuizData, QuizCompletedType } from '@utils/quiz/testData';

import { Page } from '@type/server/serverType';

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

export const fetchQuizHistoryFx = createEffect(async () => {
  const res = await http.get(urls.quizCompleted());
  return res.data;
});

type QuizHistoryType = {
  created_at: string;
  id: string;
  name: string;
};

export const $quizHistory = createStore<Page<QuizHistoryType> | null>(null).on(
  fetchQuizHistoryFx.doneData,
  (_, payload) => payload
);

type QuizHistoryDetail = {
  id: string;
  name: string;
  created_at: string;
  completed_questions: {
    answer: string;
    type: string;
    text: string;
    order: number;
    feature: string;
    min_label: string;
    max_label: string;
    min_value: number;
    max_value: number;
  }[];
};

export const fetchQuizHistoryDetailFx = createEffect(async (id: string) => {
  const res = await http.get(urls.quizCompletedId(id));
  return res.data;
});

export const $quizHistoryDetail = createStore<QuizHistoryDetail | null>(
  null
).on(fetchQuizHistoryDetailFx.doneData, (_, payload) => payload);
