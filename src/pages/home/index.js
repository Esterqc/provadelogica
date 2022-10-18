import { useNavigate } from 'react-router-dom'
import NumerosNaturais from '../naturais';



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

    function totalCompra(){
        navigate('/exercicio7')
    }

    function totalPagamento(){
        navigate('/exercicio8')
    }

    function NumerosNaturais(){
        navigate('/exercicio9')
    }

    function calcularLinha(){
        navigate('/exercicio10')
    }


    return(
        <main>
            <h4>Rayssa Rodrigues Nº 42</h4>
            <h4>Ester Queiroz Nº 14</h4>

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
            <div onClick={totalCompra}>
                Exercício 7 - Total da Compra
            </div>
            <div onClick={totalPagamento}>
                Exercício 8 - Total Pagamento
            </div>
            <div onClick={NumerosNaturais}>
                Exercício 9 - Numeros Naturais
            </div>
            <div onClick={calcularLinha}>
                Exercício 10 - Linha Asterisco
            </div>
        </main>
    )
}