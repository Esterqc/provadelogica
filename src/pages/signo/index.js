import { useState } from "react";





export default function Signo(){

    const [mes,setMes] = useState("");
    const [dia,setDia] = useState("");
    const [resultado,setResultado] = useState ("");

    function verificar() {
        const resp = verificarLibra(mes, dia)
        setResultado(resultado);
    }



    return(
        <main className="page-exercicio-2">
            <h1>Exercicio 2 - Signo</h1>
            <p>Mês</p>
            <input type='text' value={ mes } onChange={e => setMes (e.target.value)} />
           <p>dia</p>
            <input type='text' value={dia} onChange= {e => setDia(e.target.value)} />
            <button onClick={verificarClick} >Verificar Signo</button>
        <div>
    <span>{`É do signo de Libra? ${Result}`}</span>
    </div>
        </main>
    )
}