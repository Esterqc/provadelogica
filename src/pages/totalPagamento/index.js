import './index.scss'
import { useState } from 'react'

import totalPagamento from '../../services/totalPagamento';


export default function TotalPagamento() {

    const [qtdinteira, setInteira] = useState(0)
    const [qtdmeia, setMeia] = useState(0)
    const [diaSemana, setDiaSemana] = useState('')
    const [nacional, setNacional] = useState('')
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const resultado = totalPagamento(qtdinteira, qtdmeia, diaSemana, nacional)
        setMensagem(resultado)
    }

    return (
        <main className='page-exercicios'>
            <h1>Exercicio 8 - Total Pagamento</h1>
            <div className='input'>
                <label>Inteiras </label>
                <input type='number' value={qtdinteira} onChange={e => Number(setInteira(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Meias</label>
                <input type='number' value={qtdmeia} onChange={e => Number(setMeia(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Dia</label>
                <input type='text' value={diaSemana} onChange={e => Number(setDiaSemana(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>País</label>
                <input type='text' value={nacional} onChange={e => Number(setNacional(e.target.value))}></input>
            </div>
            <button onClick={calcularClick}> Calcular </button>
            <div>
                <span> {mensagem} </span>
            </div>
        </main>
    )
}