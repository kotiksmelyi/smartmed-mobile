import { Checkbox, Input, Radio } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { FC } from 'react';

type Props = {
  question: any;
  field: any;
};
export const SwitchFormFields: FC<Props> = ({ question, field }) => {
  switch (question.type) {
    case 'multiselect':
      return (
        <Checkbox.Group
          {...field}
          options={question.options.map((option: any) => option.text)}
        />
      );
    case 'select':
      return (
        <Radio.Group
          {...field}
          options={question.options.map((option: any) => option.text)}
        />
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
