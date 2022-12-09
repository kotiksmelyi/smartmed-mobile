import { BodyHeader } from '@components/body/BodyHeader';
import QuizFinishView from '@components/quiz/QuizFinishView';
import { SwitchFormFields } from '@components/quiz/SwitchFormFields';

import { useMultiStepFormNavigation } from '@hooks/useMultiStepFormNavigation';

import {
  CompletedQuestionsType,
  QuizCompletedType,
} from '@utils/quiz/testData';

import {
  $quiz,
  fetchQuizFx,
  sendQuizAnswersFx,
} from '@store/client/quiz/quizStore';

import { Button } from 'antd';
import { useStore } from 'effector-react';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const questionHeader = (
  name: string,
  activePage: number,
  pageLength: number
): string => {
  return `${name} Вопрос ${activePage} из ${pageLength}`;
};

type Props = {
  quizId: string;
};

export const Quiz: FC<Props> = ({ quizId }) => {
  const quizData = useStore($quiz);

  useEffect(() => {
    fetchQuizFx(quizId).then();
  }, [quizId]);

  const { activePage, goNext, goPrev, isFirstPage, isLastPage } =
    useMultiStepFormNavigation(quizData?.questions?.length || 0);

  const { control, handleSubmit } = useForm();

  const finishForm = (value: any) => {
    const answers: CompletedQuestionsType[] = Object.keys(value).map((key) => ({
      question_id: key,
      answer: value[key],
    }));
    sendQuizAnswersFx({ quiz_id: quizId, completed_questions: answers }).then(
      () => {
        setFinished(true);
      }
    );
  };
  const currentQuestion = quizData?.questions[activePage];

  const [finished, setFinished] = useState(false);

  if (!quizData || !currentQuestion) return null;
  if (finished) return <QuizFinishView />;

  return (
    <>
      <BodyHeader
        text={questionHeader(
          quizData.name,
          activePage + 1,
          quizData.questions.length
        )}
      />
      <form
        noValidate={true}
        onSubmit={handleSubmit(finishForm)}
        autoComplete='off'
      >
        <div className='select'>
          <h2>{currentQuestion?.text}</h2>
          <div className='select__container'>
            <Controller
              control={control}
              name={currentQuestion.id}
              key={currentQuestion.id}
              render={({ field }) => (
                <SwitchFormFields field={field} question={currentQuestion} />
              )}
            />
          </div>
        </div>
        {!isFirstPage && <Button onClick={goPrev}>{'Назад'}</Button>}
        {!isLastPage && <Button onClick={goNext}>Дальше</Button>}
        {isLastPage && <Button htmlType='submit'>Отправить</Button>}
      </form>
    </>
  );
};
