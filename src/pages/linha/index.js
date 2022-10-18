import './index.scss'
import { useState } from 'react'

import calcularLinha from '../../services/linha';

export default function Linha() {

    const [qtd, setQtd] = useState(0)
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const resultado = calcularLinha(qtd)
        setMensagem(resultado)
    }

    return (
        <main className='page-exercicios'>
            <h1>Exercicio 10 - Linha</h1>
            <div className='input'>
                <label>Quantidade</label>
                <input type='number' value={qtd} onChange={e => Number(setQtd(e.target.value))}></input>
            </div>
            <button onClick={calcularClick}> Calcular </button>
            <div>
                <span> {mensagem} </span>
            </div>
        </main>
    )
}   