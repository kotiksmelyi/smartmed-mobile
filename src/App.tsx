import { Articles } from '@pages/articles/Articles';
import { Home } from '@pages/home/Home';
import { History } from '@pages/hostory/History';
import { Prescription } from '@pages/prescription/Prescription';

import { Route, Routes } from 'react-router-dom';

import './App.scss';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/history' element={<History />} />
        <Route path='/prescription' element={<Prescription />} />
        <Route path='/articles' element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
