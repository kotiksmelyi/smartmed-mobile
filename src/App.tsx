import { Articles } from '@pages/articles/Articles';
import { History } from '@pages/history/History';
import { Home } from '@pages/home/Home';
import { NotFound } from '@pages/not-found/NotFound';
import { Prescription } from '@pages/prescription/Prescription';
import { QuizPage } from '@pages/quiz/QuizPage';

import { RoutesUrls } from '@src/lib/utils/routes';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={RoutesUrls.HOME} element={<Home />} />
        <Route path={RoutesUrls.QUIZ} element={<QuizPage />} />
        <Route path={RoutesUrls.HISTORY} element={<History />} />
        <Route path={RoutesUrls.PRESCRIPTION} element={<Prescription />} />
        <Route path={RoutesUrls.ARTICLES} element={<Articles />} />
        <Route path={RoutesUrls.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
