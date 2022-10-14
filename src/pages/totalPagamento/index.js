import './index.scss'
import { useState } from 'react'
import totalPagamento from '../../services/totalPagamento';


export default function TotalPagamento() {

    const [qtdInteiras, setQtdInteiras] = useState(0)
    const [qtdMeias, setQtdMeias] = useState(0)
    const [dia, setDia] = useState('')
    const [pais, setPais] = useState('')
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const resultado = totalPagamento(qtdInteiras, qtdMeias, dia, pais)
        setMensagem(resultado)
    }

    return (
        <main className='page-exercicios'>
            <h1>Exercicio 8 - Total Pagamento</h1>
            <div className='input'>
                <label>Inteiras </label>
                <input type='number' value={qtdInteiras} onChange={e => Number(setQtdInteiras(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Meias</label>
                <input type='number' value={qtdMeias} onChange={e => Number(setQtdMeias(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Dia</label>
                <input type='text' value={dia} onChange={e => Number(setDia(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>País</label>
                <input type='text' value={pais} onChange={e => Number(setPais(e.target.value))}></input>
            </div>
            <button onClick={calcularClick}> Calcular </button>
            <div>
                <span> {mensagem} </span>
            </div>
        </main>
    )
}