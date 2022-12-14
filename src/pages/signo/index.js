import './index.scss'
import { useState } from "react";

import { SignoFunction } from '../../services/Signo';




export default function Signo() {

    const [dia, setDia] = useState(0);
    const [mes, setMes] = useState('');
    const [resul, setResul] = useState(false);

    function SignoLibra() {
        const resposta =  SignoFunction(dia, mes)
        setResul(resposta)
    }

    return (

        <section className='page-exercicios'>
            <h1 className='Titulo-Signo'> Seu Signo o é Libra? </h1>
            <div className='Fundo'>
                <div>

                    <div className='input'>
                        <label>Digite o mês:</label>
                        <input
                            type="text"
                            value={mes}
                            onChange={e => setMes(e.target.value)} />
                    </div>

                    <div className='input'>
                        <label>Digite o dia:</label>
                        <input
                            type="number"
                            value={dia}
                            onChange={e => setDia(e.target.value)}
                            onKeyPress={e => e.key === 'Enter' ? SignoLibra() : ''} />
                    </div>

                    <div>
                        <div>
                            <button onClick={SignoLibra}> Verificar </button>
                        </div>
                        <div>
                            {resul === true ? 'Signo é Libras? Sim' : 'Signo é Libras? Não'}
                        </div>
                    </div>

                </div>

            </div>
        </section>

    )
}





