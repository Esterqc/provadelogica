import './index.scss'
import { useState } from "react";

import  calcularSorvete from '../../services/Sorvete'



export default function Index() {

    const [gramas, setGramas] = useState();
    const [resposta, setResposta] = useState();

    function calcularClick() {
        const resultado = calcularSorvete(gramas);
        setResposta(resultado); 
    }

    return (
        <main className="page-exercicios">
            <h3> Exercicio 3  Sorvete </h3>

            <div className="input">
                <p> Quantidade de gramas </p>
                <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />
            </div>
            <button onClick={calcularClick}> calcular</button>
            <div>
                <span>O total à pagar é R$ {resposta}  </span>
            </div>
        </main>
    )
}