import './index.scss'
import { useState } from "react";

import   calcularFebre  from '../../services/febre';


export default function Index(){
    const [temperatura,setTemperatura] = useState();
    const [resposta,setResposta] = useState ();

  function calcularTemperatura(){
    const resultado = calcularFebre(temperatura);
    setResposta(resultado); 
  }

  return(
    <main className='page-exercicios'>
        <h3>Exercicio 6 Febre</h3>
        <div className="input">
            <p>Verificar Temperatura</p>
            <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)} />
        </div>
        <button onClick={calcularTemperatura}>Verificar</button>
        <div>
            <span>A Situação Para Sua Temperatura é {resposta}</span>
        </div>
    </main>
  )
}