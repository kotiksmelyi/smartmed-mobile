export enum ClientUrls {
  MAIN = '/client',
  HOME = '',
  HISTORY = '/client/history',
  HISTORY_DETAIL = '/client/history/:id',
  PRESCRIPTION = '/client/prescription',
  ARTICLES = '/client/articles',
  QUIZ = '/client/quiz',
}
export enum DoctorUrls {
  MAIN = '/doctor',
  HOME = '',
  PATIENTS = '/doctor/patients',
  CREAT_QUIZ = '/doctor/create-quiz',
}

export enum GlobalUrls {
  NOT_FOUNT = '*',
  LOGIN = 'login',
  MAIN = '',
}
