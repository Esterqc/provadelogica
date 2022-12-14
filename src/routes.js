import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home'
import Acai from './pages/acai'
import Signo from './pages/signo'
import Peso from './pages/peso'
import Salario from './pages/salario'
import Abastecimento from './pages/abastecimento'
import Temperatura from './pages/temperatura'
import TotalCompra from './pages/totalCompra'
import TotalPagamento from './pages/totalPagamento'
import NumerosNaturais from './pages/naturais';
import Linha from './pages/linha';
import CalcularMedia from './pages/media';



export default function Index(){
return(
    <BrowserRouter>
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/exercicio1'} element={<Acai />} />
            <Route path={'/exercicio2'} element={<Signo />} />
            <Route path={'/exercicio3'} element={<Peso />} />
            <Route path={'/exercicio4'} element={<Salario />} />
            <Route path={'/exercicio5'} element={<Abastecimento />} />
            <Route path={'/exercicio6'} element={<Temperatura />} />
            <Route path={'/exercicio7'} element={<TotalCompra />} />
            <Route path={'/exercicio8'} element={<TotalPagamento />} />
            <Route path={'/exercicio9'} element ={<NumerosNaturais />} />
            <Route path={'/exercicio10'} element={<Linha />} />
            <Route path={'/exercicio12'} element={< CalcularMedia/>} />
        </Routes>
    </BrowserRouter>
)}
