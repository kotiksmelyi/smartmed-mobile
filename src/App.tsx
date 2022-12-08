import { DoctorNewQuiz } from '@pages/DoctorQuiz/DoctorNewQuiz';
import { DoctorQuiz } from '@pages/DoctorQuiz/DoctorQuiz';
import { Patients } from '@pages/patients/Patients';
import { Articles } from '@pages/articles/Articles';
import { History } from '@pages/history/History';
import { ClientHomePage } from '@pages/home/ClientHomePage';
import { LoginPage } from '@pages/login/LoginPage';
import { NotFound } from '@pages/not-found/NotFound';
import { Prescription } from '@pages/prescription/Prescription';
import { QuizPage } from '@pages/quiz/QuizPage';

import ClientLayout from '@components/layout/client-layout/ClientLayout';
import DoctorLayout from '@components/layout/doctor-layout/DoctorLayout';

import { useAuth } from '@hooks/auth/useAuth';

import { UserRole } from '@type/auth/authType';

import { $userRole } from '@store/auth/authStore';

import { ClientUrls, DoctorUrls, GlobalUrls } from '@src/lib/utils/routes';

import { useStore } from 'effector-react';
import { Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';

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
            <Route path={DoctorUrls.QUIZZES} element={<DoctorQuiz />} />
            <Route path='/doctor/newquiz' element={<DoctorNewQuiz />} />
            <Route path={DoctorUrls.PATIENTS} element={<Patients />} />
          </Route>
        )}

        <Route path={GlobalUrls.LOGIN} element={<LoginPage />}></Route>
        <Route path={GlobalUrls.NOT_FOUNT} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
