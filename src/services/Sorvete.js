export default function calcularSorvete(qtd) {
    if (qtd <= 0 || qtd == undefined)
        return 'Preço Inválido'
    let preco = 3.5
    if (qtd >= 1000) {
        preco = 3    
    }
    return preco * (qtd / 100)
}