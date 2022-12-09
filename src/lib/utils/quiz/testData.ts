export interface IQuizData {
  name: 'string';
  id: 'string';
  questions: [
    {
      type: 'string';
      text: 'string';
      order: number;
      feature: 'string';
      min_label: 'string';
      max_label: 'string';
      min_value: number;
      max_value: number;
      id: 'string';
    }
  ];
}
