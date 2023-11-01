import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Projetos from './components/Projetos/Projetos'
import Sobremim from './components/Sobre-Mim/Sobre'

function AppRouter() {
    return (
        <Router basename={process.env.PUBLIC_URL} >
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/projetos' element={<Projetos/>} /> 
                <Route path='/sobre-mim' element={<Sobremim/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;