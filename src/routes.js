import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'
import Projetos from './components/Projetos/Projetos'
import Sobremim from './components/Sobre-Mim/Sobre'
import Stacks from './components/Stacks/Stacks'

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/Projetos' element={<Projetos/>} /> 
                <Route path='/Sobre-mim' element={<Sobremim/>} />
                <Route path='/Stacks' element={<Stacks/>} />
            </Routes>
        </Router>
    )
}

export default AppRouter;