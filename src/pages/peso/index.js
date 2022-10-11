import { useState } from "react";
import  calcularSorvete from '../../services/Sorvete'
import './index.scss'



export default function Index() {

    const [gramas, setGramas] = useState();
    const [resposta, setResposta] = useState();

    function calcularClick() {
        const tot = calcularSorvete(gramas);
        setResposta(tot); 
    }

    return (
        <main>
            <h3> Exercicio 3  Sorvete </h3>

            <div>
                <p> Quantidade de gramas </p>
                <input type='number' value={gramas} onChange={e => setGramas(e.target.value)} />

                <button onClick={calcularClick}> calcular</button>

                <div>
                    <span>O total à pagar é R$ {resposta}  </span>
                </div>
            </div>
        </main>
    )
}