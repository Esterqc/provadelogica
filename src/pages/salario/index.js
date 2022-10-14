import './index.scss'
import { useState } from 'react'

import calcularSalario from '../../services/salario'


export default function Salario(){

    const [salario, setSalario] = useState(0)
    const [bonus, setBonus] = useState(0)
    const [desc, setDesc] = useState(0)
    const [mensagem, setMensagem] = useState(0)

    function calcularClick() {
        const valorfinal = calcularSalario(salario, bonus, desc, mensagem)
        setMensagem(valorfinal)
    }     

    return(
        <main className='page-exercicios'>
            <h1>Exercicio 4 - Salário</h1>
            <div className='input'>
                <label>Salário</label>
                <input type='number' value={salario} onChange={e => Number (setSalario(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Bônus</label>
                <input type='number' value={bonus} onChange={e => Number (setBonus(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Desconto</label>
                <input type='number' value={desc} onChange ={e => Number (setDesc(e.target.value))}></input>
            </div>
            <button onClick ={calcularClick}> Calcular </button>
            <div>
            <span> O Seu Salario Liquido é de R$ {mensagem} </span>
            </div>
        </main>
    )
}