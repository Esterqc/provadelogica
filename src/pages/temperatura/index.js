import { useState } from "react";

import './index.scss'


export default function Index(){
    const [temperatura,setTemperatura] = useState();

  function calcularTemperatura(){

  }

  return(
    <main>
        <h3>Exercicio 6 Febre</h3>
        <div>
            <p>Verificar Temperatura</p>
            <input type='number' value={temperatura} onChange={e => setTemperatura(e.target.value)} />
        </div>
    </main>
  )
}