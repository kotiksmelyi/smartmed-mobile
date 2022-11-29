import { Articles } from '@pages/articles/Articles';
import { Home } from '@pages/home/Home';
import { History } from '@pages/history/History';
import { NotFound } from '@pages/not-found/NotFound';
import { Prescription } from '@pages/prescription/Prescription';

import { RoutesUrls } from '@src/utils/routes';

import { Route, Routes } from 'react-router-dom';

import './App.scss';
import { Quiz } from '@pages/quiz/Quiz';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path={RoutesUrls.HOME} element={<Home />} />
        <Route path={RoutesUrls.QUIZ} element={<Quiz />} />
        <Route path={RoutesUrls.HISTORY} element={<History />} />
        <Route path={RoutesUrls.PRESCRIPTION} element={<Prescription />} />
        <Route path={RoutesUrls.ARTICLES} element={<Articles />} />
        <Route path={RoutesUrls.NOT_FOUND} element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
