import { BodyHeader } from '@components/body/BodyHeader';
import { quizData } from '@components/body/testData';
import { Footer } from '@components/footer/Footer';
import { Header } from '@components/header/Header';
import { Checkbox, Radio, RadioChangeEvent } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import TextArea from 'antd/es/input/TextArea';
import { useState } from 'react';

export function Quiz() {
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
      <Header text={'Ежедневная анкета'} />
      <BodyHeader
        text={
          `${quizData.name}` +
          ` ` +
          `Вопрос ` +
          `${quizData.questions[question].number}` +
          ` из ` +
          `${quizData.questions.length}`
        }
      />

      {quizData.questions[question].type === 'select' && (
        <div className='select'>
          <h2>{quizData.questions[question].text}</h2>
          <div className='select__container'>
            {quizData.questions[question].options.map((option) => (
              <Radio.Group
                size='large'
                onChange={onChangeRadio}
                value={currentValue}
                key={option.id}
              >
                <Radio value={option.text}>{option.text}</Radio>
              </Radio.Group>
            ))}
          </div>
          <button onClick={questionHandler}>Дальше</button>
        </div>
      )}

      {quizData.questions[question].type === 'multiselect' && (
        <div className='select'>
          <h2>{quizData.questions[question].text}</h2>
          <div className='select__container'>
            <Checkbox.Group
              onChange={onChangeCheckbox}
              options={quizData.questions[question].options.map(
                (option) => option.text
              )}
            />
          </div>
          <button onClick={questionHandler}>Дальше</button>
        </div>
      )}

      {quizData.questions[question].type === 'textarea' && (
        <div className='select'>
          <h2>{quizData.questions[question].text}</h2>
          <TextArea
            rows={5}
            maxLength={250}
            placeholder={'Максимум символов: 250'}
          />
          <button onClick={questionHandler}>Дальше</button>
        </div>
      )}
      <Footer />
    </>
  );
}
