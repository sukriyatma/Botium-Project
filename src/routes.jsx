
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login/Login.jsx'
import Layout from './pages/main/layout.jsx'

export default function ChildRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' exact Component={Layout}/>
                <Route path='/login' Component={Login}/>
            </Routes>
        </BrowserRouter>
    )
}