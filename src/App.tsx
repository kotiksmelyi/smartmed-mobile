import { Articles } from '@pages/articles/Articles';
import { DoctorNewQuiz } from '@pages/doctor-create-quiz/DoctorNewQuiz';
import { DoctorQuiz } from '@pages/doctor-quiz/DoctorQuiz';
import { History } from '@pages/history/History';
import { ClientHomePage } from '@pages/home/ClientHomePage';
import { HomePage } from '@pages/home/HomePage';
import { LoginPage } from '@pages/login/LoginPage';
import { NotFound } from '@pages/not-found/NotFound';
import { Patients } from '@pages/patients/Patients';
import { Prescription } from '@pages/prescription/Prescription';
import { QuizPage } from '@pages/quiz/QuizPage';

import ClientLayout from '@components/layout/client-layout/ClientLayout';
import DoctorLayout from '@components/layout/doctor-layout/DoctorLayout';

import { useAuth } from '@hooks/auth/useAuth';

import { UserRole } from '@type/auth/authType';

import { $userRole } from '@store/auth/authStore';

import { ClientUrls, DoctorUrls, GlobalUrls } from '@src/lib/utils/routes';

import { useStore } from 'effector-react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { PatientInfo } from '@pages/patients/PatientInfo';

function App() {
  useAuth();
  const role = useStore($userRole);
  return (
    <div className='App'>
      <Routes>
        {role === UserRole.client && (
          <Route path={ClientUrls.MAIN} element={<ClientLayout />}>
            <Route path={ClientUrls.HOME} element={<ClientHomePage />} />
            <Route path={ClientUrls.QUIZ} element={<QuizPage />} />
            <Route path={ClientUrls.HISTORY} element={<History />} />
            <Route path={ClientUrls.PRESCRIPTION} element={<Prescription />} />
            <Route path={ClientUrls.ARTICLES} element={<Articles />} />
          </Route>
        )}
        {role === UserRole.doctor && (
          <Route path={DoctorUrls.MAIN} element={<DoctorLayout />}>
            <Route path={DoctorUrls.HOME} element={<DoctorQuiz />} />
            <Route path={DoctorUrls.CREAT_QUIZ} element={<DoctorNewQuiz />} />
            <Route path={DoctorUrls.PATIENTS} element={<Patients />} />
            <Route path={DoctorUrls.PATIENTINFO} element={<PatientInfo />} />
          </Route>
        )}

        <Route path={GlobalUrls.LOGIN} element={<LoginPage />}></Route>
        <Route path={GlobalUrls.MAIN} element={<HomePage />}></Route>
        <Route path={GlobalUrls.NOT_FOUNT} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
