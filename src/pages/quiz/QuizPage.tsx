import { Header } from '@components/header/Header';
import { Quiz } from '@components/quiz/Quiz';

export const QuizPage = () => {
  return (
    <>
      <Header text={'Ежедневная анкета'} />
      <Quiz quizId={'a7a991f0-acda-4fb0-99ab-cee7ac8be2c2'} />
    </>
  );
};
