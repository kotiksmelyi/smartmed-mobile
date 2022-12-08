import { PatientsIcon } from '@components/UI/icons/nav-icons/PatientsIcon';
import { QuizIcon } from '@components/UI/icons/nav-icons/QuizIcon';

export const doctorLayoutData = [
  { title: 'Анкеты', icon: <QuizIcon />, path: '/quizzes' },
  { title: 'Пациенты', icon: <PatientsIcon />, path: '/patients' },
];
