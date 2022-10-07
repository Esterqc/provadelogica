import './index.scss'
import { useState } from 'react'





export default function Acai(){

    const[qtdpeq, setQtdPeq] = useState('');
    const[qtdmed, setQtdMed] = useState('');
    const[qtdgra, setQtdGra] = useState('')
    const[desc, setDesc] = useState('');

    const [mensagem, setMensagem] = useState('')

    function Calcular(){
        setQtdPeq(qtdpeq);
        setQtdMed(qtdmed);
        setQtdGra(qtdgra);

        let calculo = (qtdpeq + qtdmed + qtdgra);
        setMensagem (calculo * desc / 100);

        return {setMensagem}
    }


    return(
        <main className='page-exercicio-1'>
            <h1>Exercicio 1 - Açai</h1>
            <div className='input'>
                <label>Pequeno </label>
                <input type='number' value={qtdpeq} onChange={e => Number (setQtdPeq(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Medio</label>
                <input type='number' value={qtdmed} onChange={e => Number (setQtdMed(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Grande</label>
                <input type='number' value={qtdgra} onChange ={e => Number (setQtdGra(e.target.value))}></input>
            </div>
            <div className='input'>
                <label>Desconto</label>
                <input type='number' value={desc} onChange ={e => Number (setDesc(e.target.value))}></input>
            </div>
            <button onClick ={Calcular}> Calcular </button>
            <p>{mensagem}</p>
        </main>
    )
}