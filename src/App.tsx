import { Route, Routes } from 'react-router-dom'
import './App.scss'
import { History } from './pages/history'
import { Home } from './pages/home'

function App() {

  return (
    <div className="App">

    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/history' element={<History />}/>
      <Route path='/prescription' />
      <Route path='/article' />
    </Routes>
    </div>
  )
}

export default App
