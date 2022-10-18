import './index.scss'
import { useState } from 'react'

import calcularAcai from '../../services/acai';


export default function Acai() {

    const [qtdPeq, setQtdPeq] = useState(0)
    const [qtdMed, setQtdMed] = useState(0)
    const [qtdGra, setQtdGra] = useState(0)
    const [Desc, setDesc] = useState(0)
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const resultado = calcularAcai(qtdPeq, qtdMed, qtdGra, Desc)
        setMensagem(resultado)
    }

    return (
        <main className='page-exercicios'>
            <h1>Exercicio 1 - Açai</h1>
            <div className='input'>
                <label>Pequeno </label>
                <input type='number' value={qtdPeq} onChange={e => Number(setQtdPeq(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Medio</label>
                <input type='number' value={qtdMed} onChange={e => Number(setQtdMed(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Grande</label>
                <input type='number' value={qtdGra} onChange={e => Number(setQtdGra(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Desconto</label>
                <input type='number' value={Desc} onChange={e => Number(setDesc(e.target.value))}></input>
            </div>
            <button onClick={calcularClick}> Calcular </button>
            <div>
                <span> {mensagem} </span>
            </div>
        </main>
    )
}