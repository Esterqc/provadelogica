import './index.scss'
import { useState } from 'react'

import calcularAcai from '../../services/Acai';

export default function Acai() {

    const [qtdpeq, setQtdPeq] = useState(0)
    const [qtdmed, setQtdMed] = useState(0)
    const [qtdgra, setQtdGra] = useState(0)
    const [desc, setDesc] = useState(0)
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const resultado = calcularAcai(qtdpeq, qtdmed, qtdgra, desc)
        setMensagem(resultado)
    }

    return (
        <main className='page-exercicios'>
            <h1>Exercicio 1 - Açai</h1>
            <div className='input'>
                <label>Pequeno </label>
                <input type='number' value={qtdpeq} onChange={e => Number(setQtdPeq(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Medio</label>
                <input type='number' value={qtdmed} onChange={e => Number(setQtdMed(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Grande</label>
                <input type='number' value={qtdgra} onChange={e => Number(setQtdGra(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Desconto</label>
                <input type='number' value={desc} onChange={e => Number(setDesc(e.target.value))}></input>
            </div>
            <button onClick={calcularClick}> Calcular </button>
            <div>
                <span> {mensagem} </span>
            </div>
        </main>
    )
}