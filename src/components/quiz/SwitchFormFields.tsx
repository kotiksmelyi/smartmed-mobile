import { Checkbox, Input, Radio } from 'antd';
import { FC } from 'react';

type Props = {
  question: any;
};
export const SwitchFormFields: FC<Props> = ({ question }) => {
  switch (question.type) {
    case 'multiselect':
      return (
        <Checkbox.Group
          options={question.options.map((option: any) => option.text)}
        />
      );
    case 'select':
      return (
        <Radio.Group>
          {question.options.map((question: any) => (
            <Radio key={question.id} value={question.id}>
              {question.text}
            </Radio>
          ))}
        </Radio.Group>
      );
    case 'textarea':
      return <Input placeholder={'Максимум символов: 250'} />;
  }
  return null;
};
