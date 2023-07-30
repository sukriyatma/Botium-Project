
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import './App.css'
import Main from './pages/main/index.jsx'
import Login from './pages/Login/Login.jsx'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
