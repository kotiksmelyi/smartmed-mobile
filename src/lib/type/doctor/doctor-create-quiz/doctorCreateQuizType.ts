export interface PostDoctorQuiz {
  name: string;
  questions: DoctorCreateQuizFieldType[];
}

export interface DoctorCreateQuizFieldType {
  type: string;
  text: string;
  order: number;
  feature: string;
  min_label: string;
  max_label: string;
  min_value: number;
  max_value: number;
}

export interface ChangeQuizField {
  index: number;
  field: DoctorCreateQuizFieldType;
}
