export default function totalPagamento(qtdinteira, qtdmeia, diaSemana, nacional) {
    let total = `O total a se pagar pelos ingressos é R$ ${(qtdinteira *  28.50) + (qtdmeia * 14.25)}`

    if(qtdinteira < 0 || qtdmeia < 0)
    return 'valores de ingresos inválidos'
    
    if(nacional){ 
        total = `O total a se pagar pelos ingressos é R$ ${(qtdinteira * 5) + (qtdmeia * 5) }`
    
    }
    
    else if(diaSemana === 'quarta'){
         total = `O total a se pagar pelos ingressos é R$ ${(qtdinteira * 14.25) + (qtdmeia * 14.25) }`
    
    }
    
    
    return total
    }