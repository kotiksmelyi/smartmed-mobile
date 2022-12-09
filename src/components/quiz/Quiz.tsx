import { BodyHeader } from '@components/body/BodyHeader';
import QuizFinishView from '@components/quiz/QuizFinishView';
import { SwitchFormFields } from '@components/quiz/SwitchFormFields';

import { useMultiStepFormNavigation } from '@hooks/useMultiStepFormNavigation';
import { http } from '@server/http';

import { IQuizData } from '@utils/quiz/testData';

import { Button } from 'antd';
import { FC, useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';

const questionHeader = (
  name: string,
  activePage: number,
  pageLength: number
): string => {
  return `${name} Вопрос ${activePage} из ${pageLength}`;
};

export const Quiz: FC = () => {
  const [quizData, setQuizData] = useState<IQuizData>([]);
  async function getQuizData() {
    const response = await http.get(
      'http://78.140.241.21:8000/api/quiz/a7a991f0-acda-4fb0-99ab-cee7ac8be2c2'
    );
    console.log(response.data);
    setQuizData(response.data);
  }

  useEffect(() => {
    getQuizData();
  }, []);

  const { activePage, goNext, goPrev, isFirstPage, isLastPage } =
    useMultiStepFormNavigation(quizData?.questions?.length || 0);

  const { control, handleSubmit } = useForm();

  const finishForm = (value: any) => {
    console.log('values', value);
    setFinished(true);
  };
  const currentQuestion = quizData.questions[activePage];

  const [finished, setFinished] = useState(false);

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
              name={currentQuestion.text}
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
