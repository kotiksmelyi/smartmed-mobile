import { Slider } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC } from 'react';

type Props = {
  question: any;
  field: any;
};
export const SwitchFormFields: FC<Props> = ({ question, field }) => {
  const marks = {
    [question.min_value]: question.min_label,
    [question.max_value]: question.max_label,
  };

  switch (question.type) {
    case 'range':
      return (
        <>
          <Slider
            min={question.min_value}
            max={question.max_value}
            marks={marks}
            {...field}
          />
        </>
      );
    case 'textarea':
      return (
        <TextArea
          rows={5}
          maxLength={250}
          {...field}
          placeholder={'Максимум символов: 250'}
        />
      );
  }
  return null;
};
