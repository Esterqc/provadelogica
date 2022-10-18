import './index.scss'
import { useState } from 'react'
import  Numero  from '../../services/Naturais'



export default function NumerosNaturais(){

    const [inicio,setInicio] = useState("");
    const [fim,setFim] = useState("");
    const [carregando,setCarregando] = useState("");
    
    function CalcularNumero(){
        const Resultado = Numero(inicio,fim)
        setCarregando(Resultado)
    }

    return (
        <main className='page-exercicio-9'>
            <h1>Exercicio 9- Numeros Naturais</h1>
            <div className='input'>
                <label>Inicio</label>
             <input type='number' value={inicio} onChange={e =>(setInicio(e.target.value))}></input>
            </div>
            <div>
                <div  className='input'>
                    <label>Fim</label>
                    <input type='number' value={fim} onChange={e =>(setFim(e.target.value))}></input>
                </div>
                <button onClick={CalcularNumero}>Calcular </button>
                <div>
                  <span>{carregando}</span>
                </div>
            </div>
        </main>
    )
}