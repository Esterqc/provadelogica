import { useNavigate } from 'react-router-dom'



export default function Index(){
    const navigate = useNavigate();

    function acai(){
        navigate('/exercicio1')
    }

    function signo(){
        navigate('/exercicio2')
    }

    function peso(){
        navigate('/exercicio3')
    }

    function salario(){
        navigate('/exercicio4')
    }

    function abastecimento(){
        navigate('/exercicio5')
    }

    function temperatura(){
        navigate('/exercicio6')
    }

    return(
        <main>
            <h2> PROVA - RESOLUÇÕES DE EXERCÍCIOS </h2>

            <div onClick={acai}>
                Exercicio 1 - Açaí 
            </div>
            <div onClick={signo}>
                Exercício 2 - Signo
            </div>
            <div onClick={peso}>
                Exercício 3 - Peso
            </div>
            <div onClick={salario}>
                Exercício 4 - Salário
            </div>
            <div onClick={abastecimento}>
                Exercício 5 - Abastecimento
            </div>
            <div onClick={temperatura}>
                Exercício 6 - Temperatura
            </div>
        </main>
    )
}