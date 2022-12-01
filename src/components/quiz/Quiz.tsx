import { BodyHeader } from '@components/body/BodyHeader';
import QuizFinishView from '@components/quiz/QuizFinishView';

import { useMultiStepFormNavigation } from '@hooks/useMultiStepFormNavigation';

import { quizData } from '@utils/quiz/testData';

import { Button, Checkbox, Form, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const questionHeader = (
  name: string,
  activePage: number,
  pageLength: number
): string => {
  return `${name} Вопрос ${activePage} из ${pageLength}`;
};

export const Quiz: FC = () => {
  const { activePage, goNext, goPrev, isFirstPage, isLastPage } =
    useMultiStepFormNavigation(quizData.questions.length);

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
      <Form
        name='basic'
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        onFinish={finishForm}
        autoComplete='off'
      >
        <div className='select'>
          <h2>{currentQuestion?.text}</h2>
          <div className='select__container'>
            <Form.Item name={'text'}>
              {currentQuestion.type === 'select' && (
                <Checkbox.Group
                  options={currentQuestion.options.map(
                    (option: any) => option.text
                  )}
                />
              )}

              {currentQuestion.type === 'multiselect' && (
                <Radio.Group>
                  {currentQuestion.options.map((question: any) => (
                    <Radio key={question.id} value={question.id}>
                      {question.text}
                    </Radio>
                  ))}
                </Radio.Group>
              )}

              {currentQuestion.type === 'textarea' && (
                <TextArea
                  rows={5}
                  maxLength={250}
                  placeholder={'Максимум символов: 250'}
                />
              )}
            </Form.Item>
          </div>
        </div>
        {!isFirstPage && <Button onClick={goPrev}>{'Назад'}</Button>}
        {!isLastPage && <Button onClick={goNext}>Дальше</Button>}
        {isLastPage && <Button htmlType='submit'>Отправить</Button>}
      </Form>
    </>
  );
};
