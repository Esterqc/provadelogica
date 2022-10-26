import './index.scss'
import { useState } from 'react'
import { CalcMaior,CalcMenor,CalcMedia,criarArray } from '../../services/media';


export default function CalcularMedia(){
    const [qtd,setQtd] = useState (0);
    const [notasAlunos,setNotasAlunos] = useState (0);

    const [maior,setMaior] = useState(0);
    const [menor,setMenor] = useState(0);
    const [media,setMedia] = useState(0);

    function okQtd(){
        const x = criarArray(qtd);
        setNotasAlunos(x);
    }


    function alterar(pos,novoValor){
        notasAlunos[pos] = Number(novoValor);
        setNotasAlunos([...notasAlunos]);
    }

    function calcular(){
        const a = CalcMedia(notasAlunos);
        const b = CalcMenor(notasAlunos);
        const c = CalcMaior(notasAlunos);

        setMedia(a);
        setMaior(b);
        setMenor(c);
    }


    return(
        <main className='page-exercicio-12'>
            <h1>Exercicio 12-Calcular Média</h1>
         <div>
           Qtd.Alunos:<input type= 'text' value={qtd} onChange={e =>setQtd(e.target.value)} />
        <button onClick={okQtd}>OK</button>
         </div>
         {notasAlunos.map((item,pos) =>
         <div>
            Alunos {pos+1} : <input type='text' value={notasAlunos[pos]} onChange={e =>alterar(pos,e.target.value)} />
         </div>
          )}


         <button onClick={calcular}>Calcular</button>
         <div>
            média:{media}
         </div>
         <div>
            maior:{maior}
         </div>
         <div>
            menor:{menor}
         </div>
        </main>
    );
}