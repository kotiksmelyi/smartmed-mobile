import { BodyHeader } from '@components/body/BodyHeader';
import { Header } from '@components/header/Header';

import { $articleList, fetchArticlesFx } from '@store/articles/articlesStore';

import { useStore } from 'effector-react';
import { useEffect } from 'react';

import styles from './articles.module.scss';

export function Articles() {
  const articles = useStore($articleList);

  useEffect(() => {
    fetchArticlesFx().then();
  }, []);

  return (
    <>
      <Header text={'Статьи о здоровье'} />
      <BodyHeader text={'Полезные статьи и рекомендации'} />
      <div className={styles.wrapper}>
        {articles.map((article, index) => (
          <div className={styles.cardwrapper} key={index}>
            <img src={`${article.image}`} />
            <h4>{article.title}</h4>
            <p>{article.short_description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
