import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Articles } from './pages/articles';
import { History } from './pages/history';
import { Home } from './pages/home';
import { Prescription } from './pages/prescription';

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
