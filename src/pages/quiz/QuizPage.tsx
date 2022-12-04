import { Header } from '@components/header/Header';
import { Quiz } from '@components/quiz/Quiz';

export const QuizPage = () => {
  return (
    <>
      <Header text={'Ежедневная анкета'} />
      <Quiz />
    </>
  );
};
