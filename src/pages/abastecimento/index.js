import './index.scss'
import { useState } from 'react'

import calcularParadas from '../../services/abastecimento'


export default function Abastecimento(){

    const [capac, setCapac] = useState(0)
    const [consumo, setConsumo] = useState(0)
    const [dist, setDist] = useState(0)
    const [mensagem, setMensagem] = useState(0)
  
   async function calcularClick() {
        const calc = await calcularParadas(capac, consumo, dist, mensagem)
        setMensagem(calc)
    }
     




    return(
        <main className='page-exercicio-1'>
            <h1>Exercicio 1 - Quantas Paradas</h1>
            <div className='input'>
                <label>Capacidade</label>
                <input type='number' value={capac} onChange={e => Number (setCapac(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Consumo</label>
                <input type='number' value={consumo} onChange={e => Number (setConsumo(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Distância</label>
                <input type='number' value={dist} onChange ={e => Number (setDist(e.target.value))}></input>
            </div>
            <button onClick ={calcularClick}> Calcular </button>
            <div>
            <span>   Você precisará fazer {mensagem} paradas para abastecer. </span>
            </div>
        </main>
    )
}