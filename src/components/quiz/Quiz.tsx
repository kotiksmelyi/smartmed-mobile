import { BodyHeader } from '@components/body/BodyHeader';
import { quizData } from '@components/body/testData';

import { useMultiStepFormNavigation } from '@hooks/useMultiStepFormNavigation';

import { Button, Checkbox, Form, Radio, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import TextArea from 'antd/es/input/TextArea';
import { FC, useState } from 'react';

const questionHeader = (
  name: string,
  activePage: number,
  pageLength: number
): string => {
  return `${name} Вопрос ${activePage} из ${pageLength}`;
};

export const Quiz: FC = () => {
  const { activePage, goNext } = useMultiStepFormNavigation(
    quizData.questions.length
  );

  const finishForm = (value: any) => {
    console.log(value);
  };

  const [question, setQuestion] = useState(0);
  const [currentValue, setCurrentValue] = useState('');

  function questionHandler() {
    setQuestion(question + 1);
  }

  function onChangeRadio(e: RadioChangeEvent) {
    setCurrentValue(e.target.value);
  }

  function onChangeCheckbox(checkedValues: CheckboxValueType[]) {
    console.log(checkedValues);
  }

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
        <Form.Item label='Username' name='username'></Form.Item>
      </Form>

      {quizData.questions[question].type === 'select' && (
        <div>
          <h1>{quizData.questions[question].text}</h1>
          {quizData.questions[question].options.map((option) => (
            <Radio.Group
              onChange={onChangeRadio}
              value={currentValue}
              key={option.id}
            >
              <Radio value={option.text}>{option.text}</Radio>
            </Radio.Group>
          ))}
          <button onClick={questionHandler}>Дальше</button>
        </div>
      )}

      {quizData.questions[question].type === 'multiselect' && (
        <div>
          <h1>{quizData.questions[question].text}</h1>
          <Checkbox.Group
            onChange={onChangeCheckbox}
            options={quizData.questions[question].options.map(
              (option) => option.text
            )}
          />
          <button onClick={questionHandler}>Дальше</button>
        </div>
      )}

      {quizData.questions[question].type === 'textarea' && (
        <div>
          <h1>{quizData.questions[question].text}</h1>
          <TextArea
            rows={5}
            maxLength={250}
            placeholder={'Максимум символов: 250'}
          />
          <button onClick={goNext}>Дальше</button>
        </div>
      )}
      <Button onClick={goNext}>Дальше</Button>
    </>
  );
};
