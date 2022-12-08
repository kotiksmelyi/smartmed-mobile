import { PatientsIcon } from '@components/UI/icons/nav-icons/PatientsIcon';
import { QuizIcon } from '@components/UI/icons/nav-icons/QuizIcon';

import { DoctorUrls } from '@utils/routes';

export const doctorLayoutData = [
  { title: 'Анкеты', icon: <QuizIcon />, path: DoctorUrls.HOME },
  { title: 'Пациенты', icon: <PatientsIcon />, path: DoctorUrls.PATIENTS },
];
