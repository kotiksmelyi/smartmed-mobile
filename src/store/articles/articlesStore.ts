import { http } from '@server/http';
import { urls } from '@server/urls';

import { createEffect, createStore } from 'effector';

type ArticleType = {
  title: string;
  short_description: string;
  tags: string;
  image: string;
};

export const fetchArticlesFx = createEffect(async () => {
  const res = await http.get(urls.articles(), {
    params: { topic: 'тонзиллит' },
  });
  return res.data;
});

export const $articleList = createStore<ArticleType[]>([]).on(
  fetchArticlesFx.doneData,
  (_, payload) => payload
);
