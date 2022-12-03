import { Articles } from '@pages/articles/Articles';
import { History } from '@pages/history/History';
import { Home } from '@pages/home/Home';
import { NotFound } from '@pages/not-found/NotFound';
import { Prescription } from '@pages/prescription/Prescription';
import { QuizPage } from '@pages/quiz/QuizPage';

import ClientLayout from '@components/layout/client-layout/ClientLayout';
import DoctorLayout from '@components/layout/doctor-layout/DoctorLayout';

import { ClientUrls, DoctorUrls, GlobalUrls } from '@src/lib/utils/routes';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={ClientUrls.MAIN} element={<ClientLayout />}>
          <Route path={ClientUrls.HOME} element={<Home />} />
          <Route path={ClientUrls.QUIZ} element={<QuizPage />} />
          <Route path={ClientUrls.HISTORY} element={<History />} />
          <Route path={ClientUrls.PRESCRIPTION} element={<Prescription />} />
          <Route path={ClientUrls.ARTICLES} element={<Articles />} />
        </Route>
        <Route path={DoctorUrls.MAIN} element={<DoctorLayout />}>
          <Route path={DoctorUrls.HOME} element={<Home />} />
          {/*<Route path={RoutesUrls.QUIZ} element={<QuizPage />} />*/}
          {/*<Route path={RoutesUrls.HISTORY} element={<History />} />*/}
          {/*<Route path={RoutesUrls.PRESCRIPTION} element={<Prescription />} />*/}
          {/*<Route path={RoutesUrls.ARTICLES} element={<Articles />} />*/}
        </Route>
        <Route path={GlobalUrls.NOT_FOUNT} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
