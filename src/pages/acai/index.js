import './index.scss'
import { useState } from 'react'
import calcularAcai from '../../services/Acai';


export default function Acai(){

    const [qtdPequena, setQtdPequena] = useState(0)
    const [qtdMedia, setQtdMedia] = useState(0)
    const [qtdGrande, setQtdGrande] = useState(0)
    const [vlDesc, setVlDesc] = useState(0)
    const [vlFinal, setVlFinal] = useState(0)
  
    function calcularClick() {
        const calc = calcularAcai(qtdPequena, qtdMedia, qtdGrande, vlDesc)
        setVlFinal(calc)
    }
     




    return(
        <main className='page-exercicio-1'>
            <h1>Exercicio 1 - Açai</h1>
            <div className='input'>
                <label>Pequeno </label>
                <input type='number' value={qtdPequena} onChange={e => Number (setQtdPequena(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Medio</label>
                <input type='number' value={qtdMedia} onChange={e => Number ( setQtdMedia(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Grande</label>
                <input type='number' value={qtdGrande} onChange ={e => Number (setQtdGrande(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Desconto</label>
                <input type='number' value={vlDesc} onChange ={e => Number (setVlDesc(e.target.value))}></input>
            </div>
            <button onClick ={calcularClick}> Calcular </button>
            <div>
            <span> {vlFinal} </span>
            </div>
        </main>
    )
}