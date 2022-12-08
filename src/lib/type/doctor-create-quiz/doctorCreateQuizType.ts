export interface DoctorCreateQuizFieldType {
  name: string;
  type: string;
}

export interface ChangeQuizField {
  index: number;
  field: DoctorCreateQuizFieldType;
}
