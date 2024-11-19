import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Ad from './pages/Ad/Ad'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/' element={<Home />} />
          <Route exact path='/ad' element={<Ad />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
